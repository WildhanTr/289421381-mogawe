import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  messages: any[];
  notifications: any[];

  onMessagesChanged: BehaviorSubject<any> = new BehaviorSubject([]);
  onNotificationsChanged: BehaviorSubject<any> = new BehaviorSubject([]);

  constructor() { }
}
