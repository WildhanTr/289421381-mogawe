import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { AppConstant } from '@app/content/constant/AppConstant';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class MonitorService {
  constructor(private http: HttpClient, private router: Router, private dialogRef: MatDialog) { }

  getJobMonitorByProject(uuidBatches) {
    const headers = new HttpHeaders().set("Content-Type", "application/json").set("token", localStorage.getItem("jwt"));
    let url = AppConstant.PROJECT_SERVICE_ENDPOINT + AppConstant.API_GET_PROJECT_RESULT_TREND + "?" + "b=" + uuidBatches;
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

  getJobMonitorByProjectChart(uuidProject, periodic) {
    const headers = new HttpHeaders().set("Content-Type", "application/json").set("token", localStorage.getItem("jwt"));
    let url = AppConstant.PROJECT_SERVICE_ENDPOINT + AppConstant.API_GET_PROJECT_RESULT_TREND + "?";

    url += "p=" + uuidProject
    url += "&periodic=" + periodic

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

  getMogawersMonitorByProject(uuidBatches) {
    const headers = new HttpHeaders().set("Content-Type", "application/json").set("token", localStorage.getItem("jwt"));
    let url = AppConstant.PROJECT_SERVICE_ENDPOINT + AppConstant.API_MOGAWERS_GET_MOGAWERS_MARKER + "?b=" + uuidBatches;

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

  getMonitorStatisticByBatch(uuidBatches) {
    const headers = new HttpHeaders().set("Content-Type", "application/json").set("token", localStorage.getItem("jwt"));
    let url = AppConstant.PROJECT_SERVICE_ENDPOINT + AppConstant.API_MONITOR_GET_JOB_STATISTIC_BY_BATCH + "?" + "b=" + uuidBatches;

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
    this.dialogRef.closeAll();
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
