import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { AppConstant } from '@app/content/constant/AppConstant';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResultFactService {

  constructor(private http: HttpClient, private router: Router) { }

  getResultFacts(uuidResult:string) {

    const headers = new HttpHeaders().set("Content-Type", "application/json").set("Token", localStorage.getItem("jwt"));
    let url = AppConstant.PROJECT_SERVICE_ENDPOINT + AppConstant.API_RESULT_FACT_GET + "?";

    url += "r=" + uuidResult

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

  getResultFact(idResult) {
    const headers = new HttpHeaders().set("Content-Type", "application/json").set("Token", localStorage.getItem("jwt"));
    let url = AppConstant.PROJECT_SERVICE_ENDPOINT + AppConstant.API_GET_TASK_RESULT_FACT + idResult;
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

  updateResultFact(resultFact) {
    const headers = new HttpHeaders().set("Content-Type", "application/json").set("Token", localStorage.getItem("jwt"));
    let url = AppConstant.PROJECT_SERVICE_ENDPOINT + AppConstant.API_RESULT_FACT_UPDATE;

    return this.http.put(url,
      {
        "uuid": resultFact.uuid,
        "value": resultFact.value,
        "notes": resultFact.notes
      },
      {
        headers
      })
      .pipe(
        map((response) => {
          let res = JSON.parse(JSON.stringify(response))
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

  updateResultImageValue(data) {
    const headers = new HttpHeaders().set("token", localStorage.getItem("jwt"));
    return this.http.post(AppConstant.PROJECT_SERVICE_ENDPOINT + AppConstant.API_RESULT_IMAGE_UPDATE,
      data,
      {
        headers
      })
      .map((response) => {
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
      })
      .catch(this.handleError);
  }

  getFactImageByProjectGroupByDisplay(uuidProject) {
    const headers = new HttpHeaders().set("Content-Type", "application/json").set("Token", localStorage.getItem("jwt"));
    let url = AppConstant.PROJECT_SERVICE_ENDPOINT + AppConstant.API_RESULT_FACT_GET_IMAGE_BY_PROJECT_GROUP_BY_DISPLAY + "?idProject=" + uuidProject;

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

  
  getCloudUrlByImageName(imageName) {
    const headers = new HttpHeaders().set("Content-Type", "application/json").set("Token", localStorage.getItem("jwt"));
    let url = AppConstant.PROJECT_SERVICE_ENDPOINT + AppConstant.API_RESULT_FACT_GET_URL_IMAGE_NAME + "?imageName=" + imageName;
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

  saveImage(data) {
    const headers = new HttpHeaders().set("Token", localStorage.getItem("jwt"));
    return this.http.post(AppConstant.PROJECT_SERVICE_ENDPOINT + AppConstant.API_RESULT_SAVE_IMAGE,
      data,
      {
        headers
      })
      .map((response) => {
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
      })
      .catch(this.handleError);
  }

  getImageByFactDisplay(idDisplay, statusQc, startDate, endDate, mogawersCodes, page, offset) {
    const headers = new HttpHeaders().set("Content-Type", "application/json").set("Token", localStorage.getItem("jwt"));
    let url = AppConstant.PROJECT_SERVICE_ENDPOINT + AppConstant.API_RESULT_FACT_GET_IMAGE_BY_DISPLAY + "?";

    url += "idDisplay="+idDisplay
    if(statusQc != null){
      for(let s of statusQc){
        url += "&status="+s
      }
    }
    if(mogawersCodes != null){
      for(let m of mogawersCodes){
        url += "&mogawersCode="+m
      }
    }
    
    if(startDate != null){
      url += "&startDate="+startDate
    }
    if(endDate != null){
      url += "&endDate="+endDate
    }
    if(page != null){
      url += "&page="+page
    }
    if(offset != null){
      url += "&offset="+offset
    }


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

  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return throwError(errMsg);
  }
}
