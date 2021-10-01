import {Component, HostBinding, OnDestroy, OnInit} from '@angular/core';
import {AppService} from '@app/app.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'drawer-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class DrawerMessagesComponent implements OnInit, OnDestroy {
  @HostBinding('class') classNames = 'dt-notification';
  messages: any[] = [];
  onMessagesChanged: Subscription;

  constructor(private appService: AppService) {
  }

  ngOnInit() {
    this.onMessagesChanged = this.appService.onMessagesChanged.subscribe((messages: any[]) => {
      this.messages = messages;
    });
  }

  ngOnDestroy() {
    this.onMessagesChanged.unsubscribe();
  }

}
