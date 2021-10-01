import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { sha256 } from 'js-sha256';
import { AppConstant } from '@app/content/constant/AppConstant';

@Injectable({
  providedIn: 'root'
})
export class InvitationService {

  constructor(private http: HttpClient, private router: Router) { }

  // CONTRIBUTOR
  checkByClient(code) {
    const headers = new HttpHeaders().set("Content-Type", "application/json");
    let url = AppConstant.PROJECT_SERVICE_ENDPOINT + "/api/mogawers/checkByClient/"+code;
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
            localStorage.removeItem("jwtclient")
            this.router.navigate(["/client/login/"])
            throw new Error(res.message);
          } else {
            throw new Error(res.message);
          }
        }),
        catchError((e: Response) => this.handleError(e))
      );
  }

  activateByClient(code) {
    const headers = new HttpHeaders().set("Content-Type", "application/json");
    let url = AppConstant.PROJECT_SERVICE_ENDPOINT + "/api/mogawers/activateByClient/"+code;
    return this.http.post(url,
      {
        headers
      })
      .pipe(
        map((response) => {
          let res = JSON.parse(JSON.stringify(response));
          if (res.returnValue == '000') {
            return res;
          } else if (res.returnValue == '002') {
            localStorage.removeItem("jwtclient")
            this.router.navigate(["/client/login/"])
            throw new Error(res.message);
          } else {
            throw new Error(res.message);
          }
        }),
        catchError((e: Response) => this.handleError(e))
      );
  }
  

  createPassword(code,password) {
    const headers = new HttpHeaders().set("Content-Type", "application/json");
    let url = "https://backend-service-live-dot-mogawe-222614.appspot.com" + "/api/mogawers/createPassword/"+code;
    return this.http.put(url,
      {
        "password":sha256(password)
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
            localStorage.removeItem("jwtclient")
            this.router.navigate(["/client/login/"])
            throw new Error(res.message);
          } else {
            throw new Error(res.message);
          }
        }),
        catchError((e: Response) => this.handleError(e))
      );
  }

  // USER
  userInvitationCheck(token) {
    const headers = new HttpHeaders().set("Content-Type", "application/json");
    let url = AppConstant.PROJECT_SERVICE_ENDPOINT + AppConstant.API_INVITATION_INVITATION_CHECK + "/" + token;
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
            localStorage.removeItem("jwtclient")
            this.router.navigate(["/client/login/"])
            throw new Error(res.message);
          } else {
            throw new Error(res.message);
          }
        }),
        catchError((e: Response) => this.handleError(e))
      );
  }
  
  userInvitationActivate(user) {
    const headers = new HttpHeaders().set("Content-Type", "application/json");
    let url = AppConstant.PROJECT_SERVICE_ENDPOINT + AppConstant.API_INVITATION_INVITATION_ACTIVATE;
    return this.http.post(url,
      {
        "uuid":user.uuid,
        "fullName":user.fullName,
        "phone":user.phone,
        "password":user.password
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
            localStorage.removeItem("jwtclient")
            this.router.navigate(["/client/login/"])
            throw new Error(res.message);
          } else {
            throw new Error(res.message);
          }
        }),
        catchError((e: Response) => this.handleError(e))
      );
  }
  
  private handleError(error: any) {
    console.log(error)
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return throwError(errMsg);
  }
}