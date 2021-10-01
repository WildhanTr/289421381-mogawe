import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { AppConstant } from '@app/content/constant/AppConstant';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import 'rxjs/Rx';
import { Result } from '@app/model/result';
import { Qc } from '@app/model/qc';

@Injectable({
  providedIn: 'root'
})
export class ResultService {

  constructor(private http: HttpClient, private router: Router) { }

  getResults(uuidProject: string, uuidBatch: string, statusQc: string, statusAutoQc: string, statusJob: string[], tags: string[], query: string, page: number, offset: number) {

    const headers = new HttpHeaders().set("Content-Type", "application/json").set("Token", localStorage.getItem("jwt"));
    let url = AppConstant.PROJECT_SERVICE_ENDPOINT + AppConstant.API_RESULT_GET + "?";

    url += "p=" + uuidProject
    url += "&q=" + (query == null ? "" : query)

    if (uuidBatch != null && uuidBatch != "null") {
      url += "&b=" + uuidBatch
    }
    if (statusQc != null) {
      url += "&status=" + statusQc
    }
    if (statusAutoQc != null) {
      url += "&status_auto_qc=" + statusAutoQc
    }
    if (statusJob != null) {
      url += "&status_job="
      for (let i = 0; i < statusJob.length; i++) {
        if (i != 0)
          url += ","

        url += statusJob[i]
      }
    }
    if (tags != null && tags.length > 0) {
      url += "&tag="
      for (let i = 0; i < tags.length; i++) {
        if (i != 0)
          url += ","

        url += tags[i]
      }
    }

    url += "&page=" + page
    url += "&offset=" + offset

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

  getResultsQC(uuidProject: string, uuidBatch: string, startdate: string, enddate: string, status: string, tags: string[], query: string, page: number, offset: number) {

    const headers = new HttpHeaders().set("Content-Type", "application/json").set("Token", localStorage.getItem("jwt"));
    let url = AppConstant.PROJECT_SERVICE_ENDPOINT + AppConstant.API_RESULT_QC_GET + "?";

    url += "p=" + uuidProject
    if (uuidBatch != null)
      url += "&b=" + uuidBatch
    if (startdate != null)
      url += "&startdate=" + startdate
    if (enddate != null)
      url += "&enddate=" + enddate
    if (status != null)
      url += "&status=" + status

    if (tags != null && tags.length > 0) {
      url += "&tag="
      for (let i = 0; i < tags.length; i++) {
        if (i != 0)
          url += ","

        url += tags[i]
      }
    }

    url += "&q=" + (query == null ? "" : query)
    url += "&page=" + page
    url += "&offset=" + offset

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

  getResultDetail(uuidResult: string) {
    const headers = new HttpHeaders().set("Content-Type", "application/json").set("Token", localStorage.getItem("jwt"));
    let url = AppConstant.PROJECT_SERVICE_ENDPOINT + AppConstant.API_RESULT_GET + "/" + uuidResult;

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

  getResultsQCLogicCheck(uuidResult: string) {

    const headers = new HttpHeaders().set("Content-Type", "application/json").set("Token", localStorage.getItem("jwt"));
    let url = AppConstant.PROJECT_SERVICE_ENDPOINT + AppConstant.API_RESULT_QC_GET_DETAIL_STATUS + "?";

    url += "r=" + uuidResult

    return this.http.get(url,
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

  updateResult(result: Result) {

    const headers = new HttpHeaders().set("Content-Type", "application/json").set("Token", localStorage.getItem("jwt"));
    let url = AppConstant.PROJECT_SERVICE_ENDPOINT + AppConstant.API_RESULT_UPDATE;

    return this.http.put(url,
      result,
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

  qcResult(qControl: Qc) {
    const headers = new HttpHeaders().set("Content-Type", "application/json").set("Token", localStorage.getItem("jwt"));
    return this.http.post(AppConstant.PROJECT_SERVICE_ENDPOINT + AppConstant.API_TASK_RESULT_ACTION,
      {
        "idResult": qControl.idResult,
        "idResultFact": qControl.idResultFact,
        "status": qControl.status,
        "notes": qControl.notes
      },
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

  approveFull(qControl: Qc) {
    const headers = new HttpHeaders().set("Content-Type", "application/json").set("Token", localStorage.getItem("jwt"));
    return this.http.post(AppConstant.PROJECT_SERVICE_ENDPOINT + AppConstant.API_TASK_APPROVE_FULL,
      qControl,
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

  getResultsNearby(uuidResult, distance, uuidBatches, statusQcs, page, offset) {

    const headers = new HttpHeaders().set("Content-Type", "application/json").set("Token", localStorage.getItem("jwt"));
    let url = AppConstant.PROJECT_SERVICE_ENDPOINT + AppConstant.API_RESULT_GET_BY_DISTANCE + "/" + uuidResult + "?";

    url += "distance=" + distance
    if (statusQcs != null && statusQcs.length > 0) {
      url += "&status="
      let index = 0;
      for (let sq of statusQcs) {
        if (index != 0) {
          url += ","
        }

        url += sq
        index++;
      }
    }

    if (uuidBatches != null && uuidBatches.length > 0) {
      for (let b of uuidBatches) {
        url += "&b=" + b
      }
    }

    url += "&page=" + page
    url += "&offset=" + offset

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

  getTaskOrderDetail(uuidTaskOrder: string) {
    const headers = new HttpHeaders().set("Content-Type", "application/json").set("Token", localStorage.getItem("jwt"));
    let url = AppConstant.PROJECT_SERVICE_ENDPOINT + AppConstant.API_TASK_ORDER_GET + "/" + uuidTaskOrder;

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
