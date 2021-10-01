import { Injectable, PipeTransform } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { AppConstant } from '@app/content/constant/AppConstant';
import { map, catchError, tap, debounceTime, switchMap, delay } from 'rxjs/operators';
import { throwError, BehaviorSubject, Subject, Observable, of } from 'rxjs';
import { Contributors } from '@app/model/contributors';
import { SortDirection } from '@app/shared/sortable.directive';
import { MatDialog } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class SectionService {

  constructor(private http: HttpClient, private router: Router, private dialogRef: MatDialog) { }

  getSections(uuidQuestionnaire:string) {

    const headers = new HttpHeaders().set("Content-Type", "application/json").set("Token", localStorage.getItem("jwt"));
    let url = AppConstant.PROJECT_SERVICE_ENDPOINT + AppConstant.API_SECTION_GET + "?";
    
    url += "qnair=" + uuidQuestionnaire + "&showall=1"

    return this.http.get(url,
      {
        headers
      })
      .pipe(
        map((response) => { 
          let res = JSON.parse(JSON.stringify(response));
          if (res.returnValue == '000') {
            return res;
          } else if (res.returnValue == '002') {
            localStorage.removeItem("jwt")
            this.router.navigate(["/signin"])
            throw new Error(res.message);
          } else {
            throw new Error(res.message);
          }
        }),
        catchError((e: Response) => this.handleError(e))
      );
  }

  getSectionDetail(uuidSection:string) {
    const headers = new HttpHeaders().set("Content-Type", "application/json").set("Token", localStorage.getItem("jwt"));
    let url = AppConstant.PROJECT_SERVICE_ENDPOINT + AppConstant.API_SECTION_GET + "/" + uuidSection;

    return this.http.get(url,
      {
        headers
      })
      .pipe(
        map((response) => {
          let res = JSON.parse(JSON.stringify(response));
          if (res.returnValue == '000') {
            return res;
          } else if (res.returnValue == '002') {
            localStorage.removeItem("jwt")
            this.router.navigate(["/signin"])
            throw new Error(res.message);
          } else {
            throw new Error(res.message);
          }
        }),
        catchError((e: Response) => this.handleError(e))
      );
  }

  createSection(section) {
    const headers = new HttpHeaders().set("Content-Type", "application/json").set("Token", localStorage.getItem("jwt"));
    let url = AppConstant.PROJECT_SERVICE_ENDPOINT + AppConstant.API_SECTION_CREATE;

    return this.http.post(url,
      {
        "uuidQuestionnaire": section.uuidQuestionnaire,
        "name": section.name,
        "actionRules": section.actionRules
      },
      {
        headers
      })
      .pipe(
        map((response) => {
          let res = JSON.parse(JSON.stringify(response));
          if (res.returnValue == '000') {
            return res;
          } else if (res.returnValue == '002') {
            localStorage.removeItem("jwt")
            this.router.navigate(["/signin"])
            throw new Error(res.message);
          } else {
            throw new Error(res.message);
          }
        }),
        catchError((e: Response) => this.handleError(e))
      );
  }

  updateSection(section) {
    const headers = new HttpHeaders().set("Content-Type", "application/json").set("Token", localStorage.getItem("jwt"));
    let url = AppConstant.PROJECT_SERVICE_ENDPOINT + AppConstant.API_SECTION_UPDATE;
    return this.http.put(url,section,
      {
        headers
      })
      .pipe(
        map((response) => {
          let res = JSON.parse(JSON.stringify(response));
          if (res.returnValue == '000') {
            return res;
          } else if (res.returnValue == '002') {
            localStorage.removeItem("jwt")
            this.router.navigate(["/signin"])
            throw new Error(res.message);
          } else {
            throw new Error(res.message);
          }
        }),
        catchError((e: Response) => this.handleError(e))
      );
  }

  deleteSection(uuidSection) {
    const headers = new HttpHeaders().set("Content-Type", "application/json").set("Token", localStorage.getItem("jwt"));
    let url = AppConstant.PROJECT_SERVICE_ENDPOINT + AppConstant.API_SECTION_DELETE + "/" + uuidSection;

    return this.http.delete(url,
      {
        headers
      })
      .pipe(
        map((response) => {
          let res = JSON.parse(JSON.stringify(response));
          if (res.returnValue == '000') {
            return res;
          } else if (res.returnValue == '002') {
            localStorage.removeItem("jwt")
            this.router.navigate(["/signin"])
            throw new Error(res.message);
          } else {
            throw new Error(res.message);
          }
        }),
        catchError((e: Response) => this.handleError(e))
      );
  }
  

  private handleError(error: any) {
    this.dialogRef.closeAll();
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return throwError(errMsg);
  }
}
