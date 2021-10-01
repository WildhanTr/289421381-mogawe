import {Component, HostBinding, HostListener, OnDestroy, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import {Location} from '@angular/common';

import {SettingsService} from '@app/settings/settings.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  @HostBinding('class.d-none') hidHeader = false;
  settings: any;
  isNavFolded = false;
  onSettingChanged: Subscription;

  constructor(private settingService: SettingsService,
              private router: Router,
              private location: Location) {

    router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // toggle header on Apps pages
        this.toggleHeader(router.url, window.innerWidth);
      }
    });

    this.onSettingChanged = this.settingService.onSettingChanged.subscribe((settings) => {
      this.settings = settings;
      this.isNavFolded = this.settings.navigationStyle === 'folded' && window.innerWidth >= 992;
    });

    // toggle header on Apps pages
    this.toggleHeader(this.location.path(), window.innerWidth);
  }

  ngOnInit() {

  }

  @HostListener('window:resize')
  onResize() {
    this.isNavFolded = this.settings.navigationStyle === 'folded' && window.innerWidth >= 992;
    this.toggleHeader(this.location.path(), window.innerWidth);
  }

  /**
   * Toggle header by class
   * @param currentUrl
   * @param winInnerWidth
   */
  toggleHeader(currentUrl, winInnerWidth) {
    this.hidHeader = currentUrl.includes('/apps/') && winInnerWidth <= 767;
  }

  toggleNavigation() {
    if (this.settings.navigationStyle === 'drawer' || window.innerWidth < 992) {
      this.settings.activeNavDrawer = !this.settings.activeNavDrawer;
    } else if (this.settings.navigationStyle === 'folded') {
      this.settings.navigationStyle = 'default';
    } else {
      this.settings.navigationStyle = 'folded';
    }

    this.settingService.setSettings(this.settings);
  }

  ngOnDestroy() {
    this.onSettingChanged.unsubscribe();
  }

}
