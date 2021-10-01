import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
  breadcrumb = [{label: 'NOTIFICATION', active: true}];
  constructor() { }

  ngOnInit(): void {
  }

}
