import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {SettingsService} from '@app/settings/settings.service';

@Component({
  selector: 'app-blank',
  templateUrl: './blank.component.html',
  styleUrls: ['./blank.component.scss']
})
export class BlankComponent implements OnInit, OnDestroy {
  breadcrumb = [{label: 'Blank Page', active: true}];
  settings: any;
  onSettingChanged: Subscription;

  constructor(private settingService: SettingsService) {
    this.onSettingChanged = this.settingService.onSettingChanged.subscribe(
      (newSettings) => {
        this.settings = newSettings;
      }
    );
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.onSettingChanged.unsubscribe();
  }

}
