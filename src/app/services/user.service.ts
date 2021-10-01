import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { sha256 } from 'js-sha256';
import { map, catchError } from 'rxjs/operators';
import { AppConstant } from '@app/content/constant/AppConstant';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { MatDialog } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private refresh: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  constructor(private http: HttpClient, private router: Router, private dialogRef: MatDialog) { 
    if(JSON.parse(localStorage.getItem("currentUser")) != null){
      this.setRefresh(JSON.parse(localStorage.getItem("currentUser")))
    }
  }
  login(email: string, password: string) {
    const headers = new HttpHeaders().set("Content-Type", "application/json").set("Token", localStorage.getItem("jwt"));
    let url = AppConstant.PROJECT_SERVICE_ENDPOINT + AppConstant.API_LOGIN;
    return this.http.post(url,
      {
        "email": email,
        "password": sha256(password),
      })
      .pipe(
        map((response) => {
          let res = JSON.parse(JSON.stringify(response));
          if (res.returnValue == '000') {
            return res;
          } else if (res.returnValue == '002') {
            localStorage.removeItem("jwt")
            this.router.navigate(["/authentication/login/"])
            throw new Error(res.message);
          } else {
            throw new Error(res.message);
          }
        }),
        catchError((e: Response) => this.handleError(e))
      );
  }

  registration(data) {
    const headers = new HttpHeaders().set("Content-Type", "application/json");
    let url = AppConstant.PROJECT_SERVICE_ENDPOINT + AppConstant.API_USER_REGISTRATION;
    return this.http.post(url,
      {
        "company": data.company,
        "fullName": data.fullName,
        "phone": data.phone,
        "email": data.email,
        "password": sha256(data.password),
      })
      .pipe(
        map((response) => {
          let res = JSON.parse(JSON.stringify(response));
          if (res.returnValue == '000') {
            return res;
          } else if (res.returnValue == '002') {
            localStorage.removeItem("jwt")
            this.router.navigate(["/authentication/registration/"])
            throw new Error(res.message);
          } else {
            throw new Error(res.message);
          }
        }),
        catchError((e: Response) => this.handleError(e))
      );
  }

  forgotPassword(data) {
    const headers = new HttpHeaders().set("Content-Type", "application/json");
    let url = AppConstant.PROJECT_SERVICE_ENDPOINT + AppConstant.API_USER_FORGOT_PASSWORD;
    return this.http.post(url,
      {
        "email": data.email,
      })
      .pipe(
        map((response) => {
          let res = JSON.parse(JSON.stringify(response));
          if (res.returnValue == '000') {
            return res;
          } else if (res.returnValue == '002') {
            localStorage.removeItem("jwt")
            this.router.navigate(["/authentication/forgot-password/"])
            throw new Error(res.message);
          } else {
            throw new Error(res.message);
          }
        }),
        catchError((e: Response) => this.handleError(e))
      );
  }

  changePasswordPost(data) {
    const headers = new HttpHeaders().set("Content-Type", "application/json");
    let url = AppConstant.PROJECT_SERVICE_ENDPOINT + AppConstant.API_USER_POST_RESET_PASSWORD;
    return this.http.put(url,
      {
        "code": data.code,
        "newPassword": data.newPassword,
        "confirmPassword": data.confirmPassword
      })
      .pipe(
        map((response) => {
          let res = JSON.parse(JSON.stringify(response));
          if (res.returnValue == '000') {
            return res;
          } else if (res.returnValue == '002') {
            localStorage.removeItem("jwt")
            this.router.navigate(["/authentication/forgot-password/"])
            throw new Error(res.message);
          } else {
            throw new Error(res.message);
          }
        }),
        catchError((e: Response) => this.handleError(e))
      );
  }

  sendCodeEmailForgotPassword(email: string) {
    const headers = new HttpHeaders().set("Content-Type", "application/json");
    let url = AppConstant.PROJECT_SERVICE_ENDPOINT + AppConstant.API_USER_FORGOT_PASSWORD_CODE;
    return this.http.post(url,
      {
        "email": email,
      })
      .pipe(
        map((response) => {
          let res = JSON.parse(JSON.stringify(response));
          if (res.returnValue == '000') {
            return res;
          } else if (res.returnValue == '002') {
            localStorage.removeItem("jwt")
            this.router.navigate(["/authentication/forgot-password/"])
            throw new Error(res.message);
          } else {
            throw new Error(res.message);
          }
        }),
        catchError((e: Response) => this.handleError(e))
      );
  }

  checkCodeForgotPasswordCode(code){
    const headers = new HttpHeaders().set("Content-Type", "application/json");
    let url = AppConstant.PROJECT_SERVICE_ENDPOINT + AppConstant.API_USER_FORGOT_PASSWORD_CODE + '?code=' + code;
    return this.http.get(url)
      .pipe(
        map((response) => {
          let res = JSON.parse(JSON.stringify(response));
          if (res.returnValue == '000') {
            return res;
          } else if (res.returnValue == '002') {
            localStorage.removeItem("jwt")
            this.router.navigate(["/authentication/registration/"])
            throw new Error(res.message);
          } else {
            throw new Error(res.message);
          }
        }),
        catchError((e: Response) => this.handleError(e))
      );
  }

  sendCodeEmailActivation(email: string) {
    const headers = new HttpHeaders().set("Content-Type", "application/json");
    let url = AppConstant.PROJECT_SERVICE_ENDPOINT + AppConstant.API_SEND_EMAIL_ACTIVATION;
    return this.http.post(url,
      {
        "email": email,
      })
      .pipe(
        map((response) => {
          let res = JSON.parse(JSON.stringify(response));
          if (res.returnValue == '000') {
            return res;
          } else if (res.returnValue == '002') {
            localStorage.removeItem("jwt")
            this.router.navigate(["/authentication/registration/"])
            throw new Error(res.message);
          } else {
            throw new Error(res.message);
          }
        }),
        catchError((e: Response) => this.handleError(e))
      );
  }

  sendCodeEmailActivationPost(email: string, code: string) {
    const headers = new HttpHeaders().set("Content-Type", "application/json");
    let url = AppConstant.PROJECT_SERVICE_ENDPOINT + AppConstant.API_EMAIL_ACTIVATION;
    return this.http.post(url,
      {
        "email": email,
        "activationCode": code
      })
      .pipe(
        map((response) => {
          let res = JSON.parse(JSON.stringify(response));
          if (res.returnValue == '000') {
            return res;
          } else if (res.returnValue == '002') {
            localStorage.removeItem("jwt")
            this.router.navigate(["/authentication/registration/"])
            throw new Error(res.message);
          } else {
            throw new Error(res.message);
          }
        }),
        catchError((e: Response) => this.handleError(e))
      );
  }

  getProfile() {
    const headers = new HttpHeaders().set("Content-Type", "application/json").set("Token", localStorage.getItem("jwt"));
    let url = AppConstant.PROJECT_SERVICE_ENDPOINT + AppConstant.API_USER_GET_PROFIL;
    return this.http.get(url, {
      headers
    })
      .pipe(
        map((response) => {
          let res = JSON.parse(JSON.stringify(response));
          if (res.return_value == '002') {
            localStorage.removeItem("jwt")
            this.router.navigate(["/auth/login/"])
            throw new Error(res.message);
          } else {
            return res;
          }
        }),
        catchError((e: Response) => this.handleError(e))
      );
  }

  updatePassword(body) {
    const headers = new HttpHeaders().set("Content-Type", "application/json").set("Token", localStorage.getItem("jwt"));
    let url = AppConstant.PROJECT_SERVICE_ENDPOINT + AppConstant.API_USER_CHANGE_PASSWORD;
    return this.http.put(url, body,
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

  updateProfile(body) {
    const headers = new HttpHeaders().set("Content-Type", "application/json").set("Token", localStorage.getItem("jwt"));
    let url = AppConstant.PROJECT_SERVICE_ENDPOINT + AppConstant.API_USER_UPDATE_PROFILE;
    return this.http.put(url, body,
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

  updateProfilePicture(data) {
    const headers = new HttpHeaders().set("Token", localStorage.getItem("jwt"));
    let url = AppConstant.PROJECT_SERVICE_ENDPOINT + AppConstant.API_UPLOAD_PROFILE_PICTURE;
    
    return this.http.post(url, data,
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

  public getRefresh(): Observable<any> {
    return this.refresh.asObservable();
  }

  public setRefresh(value: any): void {
    localStorage.setItem("currentUser", JSON.stringify(value))
    this.refresh.next(value);
  }

  private handleError(error: any) {
    this.dialogRef.closeAll();
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return throwError(errMsg);
  }

}