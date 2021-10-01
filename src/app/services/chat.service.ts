import { Injectable, PipeTransform } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { AppConstant } from '@app/content/constant/AppConstant';
import { map, catchError, tap, debounceTime, switchMap, delay } from 'rxjs/operators';
import { throwError, BehaviorSubject, Subject, Observable, of } from 'rxjs';
import { SortDirection } from '@app/shared/sortable.directive';
import { MatDialog } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private http: HttpClient, private router: Router, private dialogRef: MatDialog) { }

  getListUser(user_email: string, page: number, limit: number) {
    const headers = new HttpHeaders().set("Content-Type", "application/json").set("QISCUS-SDK-APP-ID", AppConstant.CHAT_APPLICATION_ID).set("QISCUS_SDK_SECRET",AppConstant.CHAT_SECRET_KEY);
    let url = AppConstant.CHAT_SERVICE_ENDPOINT + AppConstant.CHAT_GET_ROOM_LIST + '?';

    url += "user_id=" + user_email
    url += "&page=" + page
    url += "&limit=" + limit

    return this.http.get(url,
      {
        headers
      })
      .pipe(
        map((response) => {
          let res = JSON.parse(JSON.stringify(response));
          if (res.status == '200') {
            return res;
          } else {
            throw new Error(res.message);
          }
        }),
        catchError((e: Response) => this.handleError(e))
      );
  }

  getListComment(roomId: string, page: number, limit: number) {
    const headers = new HttpHeaders().set("Content-Type", "application/json").set("QISCUS-SDK-APP-ID", AppConstant.CHAT_APPLICATION_ID).set("QISCUS_SDK_SECRET",AppConstant.CHAT_SECRET_KEY);
    let url = AppConstant.CHAT_SERVICE_ENDPOINT + AppConstant.CHAT_GET_COMMENT_LIST + '?';

    url += "room_id=" + roomId
    url += "&page=" + page
    url += "&limit=" + limit

    return this.http.get(url,
      {
        headers
      })
      .pipe(
        map((response) => {
          let res = JSON.parse(JSON.stringify(response));
          if (res.status == '200') {
            return res;
          } else {
            throw new Error(res.message);
          }
        }),
        catchError((e: Response) => this.handleError(e))
      );
  }

   getListParticipant(roomId: string, page: number, limit: number) {
    const headers = new HttpHeaders().set("Content-Type", "application/json").set("QISCUS-SDK-APP-ID", AppConstant.CHAT_APPLICATION_ID).set("QISCUS_SDK_SECRET",AppConstant.CHAT_SECRET_KEY);
    let url = AppConstant.CHAT_SERVICE_ENDPOINT + AppConstant.CHAT_GET_PARTICIPANT_LIST + '?';

    url += "room_id=" + roomId
    url += "&page=" + page
    url += "&limit=" + limit

    return this.http.get(url,
      {
        headers
      })
      .pipe(
        map((response) => {
          let res = JSON.parse(JSON.stringify(response));
          if (res.status == '200') {
            return res;
          } else {
            throw new Error(res.message);
          }
        }),
        catchError((e: Response) => this.handleError(e))
      );
  }

  postComment(body) {
    const headers = new HttpHeaders().set("Content-Type", "application/json").set("QISCUS-SDK-APP-ID", AppConstant.CHAT_APPLICATION_ID).set("QISCUS_SDK_SECRET",AppConstant.CHAT_SECRET_KEY);
    let url = AppConstant.CHAT_SERVICE_ENDPOINT + AppConstant.CHAT_POST_COMMENT;

    return this.http.post(url, body,
      {
        headers
      })
      .pipe(
        map((response) => {
          let res = JSON.parse(JSON.stringify(response));
          if (res.status == '200') {
            return res;
          } else {
            throw new Error(res.message);
          }
        }),
        catchError((e: Response) => this.handleError(e))
      );
  }

  loginOrRegister(body) {
    const headers = new HttpHeaders().set("Content-Type", "application/json").set("QISCUS-SDK-APP-ID", AppConstant.CHAT_APPLICATION_ID).set("QISCUS_SDK_SECRET",AppConstant.CHAT_SECRET_KEY);
    let url = AppConstant.CHAT_SERVICE_ENDPOINT + AppConstant.CHAT_LOGIN_OR_REGISTER;

    return this.http.post(url, body,
      {
        headers
      })
      .pipe(
        map((response) => {
          let res = JSON.parse(JSON.stringify(response));
          if (res.status == '200') {
            return res;
          } else {
            throw new Error(res.message);
          }
        }),
        catchError((e: Response) => this.handleError(e))
      );
  }

  removeParticipant(body) {
    const headers = new HttpHeaders().set("Content-Type", "application/json").set("QISCUS-SDK-APP-ID", AppConstant.CHAT_APPLICATION_ID).set("QISCUS_SDK_SECRET",AppConstant.CHAT_SECRET_KEY);
    let url = AppConstant.CHAT_SERVICE_ENDPOINT + AppConstant.CHAT_REMOVE_PARTISIPANT;

    return this.http.post(url, body,
      {
        headers
      })
      .pipe(
        map((response) => {
          let res = JSON.parse(JSON.stringify(response));
          if (res.status == '200') {
            return res;
          } else {
            throw new Error(res.message);
          }
        }),
        catchError((e: Response) => this.handleError(e))
      );
  }

  createRoom(body) {
    const headers = new HttpHeaders().set("Content-Type", "application/json").set("QISCUS-SDK-APP-ID", AppConstant.CHAT_APPLICATION_ID).set("QISCUS_SDK_SECRET",AppConstant.CHAT_SECRET_KEY);
    let url = AppConstant.CHAT_SERVICE_ENDPOINT + AppConstant.CHAT_CREATE_ROOM;

    return this.http.post(url, body,
      {
        headers
      })
      .pipe(
        map((response) => {
          let res = JSON.parse(JSON.stringify(response));
          if (res.status == '200') {
            return res;
          } else {
            throw new Error(res.message);
          }
        }),
        catchError((e: Response) => this.handleError(e))
      );
  }

  getUnreadCount(email: string, roomIds) {
    const headers = new HttpHeaders().set("Content-Type", "application/json").set("QISCUS-SDK-APP-ID", AppConstant.CHAT_APPLICATION_ID).set("QISCUS_SDK_SECRET",AppConstant.CHAT_SECRET_KEY);
    let url = AppConstant.CHAT_SERVICE_ENDPOINT + AppConstant.CHAT_GET_UNREAD_COUNT + '?';

    url += "user_id=" + email
    url += "&room_ids[]=" + roomIds

    return this.http.get(url,
      {
        headers
      })
      .pipe(
        map((response) => {
          let res = JSON.parse(JSON.stringify(response));
          if (res.status == '200') {
            return res;
          } else {
            throw new Error(res.message);
          }
        }),
        catchError((e: Response) => this.handleError(e))
      );
  }

  getContributor(query: string, page: number, offset: number, lat: number, lng: number, radius: number, tag: any, lastSeenType: any, lastSeen: any, joinDateType: any, joinDate: any) {

    const headers = new HttpHeaders().set("Content-Type", "application/json").set("Token", localStorage.getItem("jwt"));
    let url = AppConstant.PROJECT_SERVICE_ENDPOINT + AppConstant.API_GET_CONTRIBUTOR + '?';

    url += "q=" + (query == null ? "" : query)
    url += "&page=" + page
    url += "&offset=" + offset
    if (lat != null) {
      url += "&lat=" + lat
    }
    if (lng != null) {
      url += "&lng=" + lng
    }
    if (radius != null && radius != 0) {
      url += "&radius=" + radius
    }
    var tags = [];
    for (let atag of tag) {
      var data = []
      data = atag.value
      tags.push(data)
    }
    if (tag != null && tag != "") {
      url += "&tag=" + tags
    }
    if (lastSeenType != null && lastSeenType != "") {
      url += "&lastSeen=" + lastSeenType
    }
    if (lastSeen != null && lastSeen != "" && lastSeen != []) {
      url += "&lastSeenStart=" + lastSeen.startDate.format("YYYY-MM-DD") + "&lastSeenEnd=" + lastSeen.endDate.format("YYYY-MM-DD")
    }
    if (joinDateType != null && joinDateType != "") {
      url += "&joinDate=" + joinDateType
    }
    if (joinDate != null && joinDate != "" && joinDate != []) {
      url += "&joinDateStart=" + joinDate.startDate.format("YYYY-MM-DD") + "&joinDateEnd=" + joinDate.endDate.format("YYYY-MM-DD")
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

  getDetailContributor(uuid) {
    const headers = new HttpHeaders().set("Content-Type", "application/json").set("Token", localStorage.getItem("jwt"));
    let url = AppConstant.PROJECT_SERVICE_ENDPOINT + AppConstant.API_GET_CONTRIBUTOR + '/' + uuid;

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
    return throwError(errMsg);
  }

}
