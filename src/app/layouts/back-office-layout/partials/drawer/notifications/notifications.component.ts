import {Component, HostBinding, OnDestroy, OnInit} from '@angular/core';
import {AppService} from '@app/app.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'drawer-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class DrawerNotificationsComponent implements OnInit, OnDestroy {
  @HostBinding('class') classNames = 'dt-notification';
  notifications: any[] = [];
  onNotificationsChanged: Subscription;

  constructor(private appService: AppService) {
    this.onNotificationsChanged = this.appService.onNotificationsChanged.subscribe((notifications: any[]) => {
      this.notifications = notifications;
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.onNotificationsChanged.unsubscribe();
  }

}
