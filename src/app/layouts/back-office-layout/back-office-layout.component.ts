import { Component, HostBinding, HostListener, Inject, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { SettingsService } from '@app/settings/settings.service';
import { NavigationService } from '@gaxon/components';
import { Subscription } from 'rxjs/Subscription';
import { DOCUMENT } from '@angular/common';
import { LayoutConfig } from './layout.config';

import { NavigationModel } from './navigation/navigation.model';

@Component({
  selector: 'app-back-office-layout',
  templateUrl: './back-office-layout.component.html',
  styleUrls: ['./back-office-layout.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BackOfficeLayoutComponent implements OnInit, OnDestroy {
  @HostBinding('class') classNames = 'dt-root__inner';

  settings: any;
  modes = ['framed', 'full-width', 'boxed'];

  onSettingChanged: Subscription;

  currentUser;

  constructor(
    private navService: NavigationService,
    private settingService: SettingsService,
    @Inject(DOCUMENT) private document: any) {
    this.currentUser = JSON.parse(localStorage.getItem("currentUser"))
    this.settingService.setSettings(new LayoutConfig().configs);

    this.onSettingChanged = this.settingService.onSettingChanged.subscribe(
      (newSettings) => {
        this.settings = newSettings;
        this.updateLayout();
        this.document.body.classList.add('dt-layout--' + this.settings.layout);
      }
    );

    // Set the navigation model
    if (this.currentUser) {
      var dataNavigation = new NavigationModel();
      if (!this.currentUser.isMobisnis && !this.currentUser.isSupplier) {
        dataNavigation.navigation.splice(1, 1)
        dataNavigation.navigation.splice(1, 1)
      } else {
        //Mobisnis
        if (this.currentUser.isMobisnis) {
          dataNavigation.navigation[0].children.push({
            id: 'assignment',
            title: 'Assignment',
            type: 'item',
            icon: 'fa fa-briefcase',
            url: '/assignment',
          })
        } else {
          dataNavigation.navigation.splice(1, 1)
        }
        //Supplier
        if (this.currentUser.isSupplier) {
        }else{
          dataNavigation.navigation.splice(2, 1)
        }
      }
      this.navService.setNavigationModel(dataNavigation);
    }
  }

  @HostListener('window:resize')
  onResize() {
    this.updateLayout();
  }

  ngOnInit() {
  }

  /**
   * On click overlay
   */
  onClickOverlay() {
    this.settings.activeNavDrawer = false;
    this.settingService.setSettings(this.settings);
  }

  /**
   * Update layout
   */
  updateLayout() {
    if (this.settings.navigationFixed && window.innerWidth >= 992) {
      this.document.body.classList.add('dt-sidebar--fixed');
    } else {
      this.document.body.classList.remove('dt-sidebar--fixed');
    }

    if (this.settings.headerFixed) {
      this.document.body.classList.add('dt-header--fixed');
    } else {
      this.document.body.classList.remove('dt-header--fixed');
    }

    if (this.settings.navigationStyle === 'folded' && window.innerWidth >= 992) {
      this.document.body.classList.add('dt-sidebar--folded');
    } else {
      this.document.body.classList.remove('dt-sidebar--folded');
    }

    this.applyNewLayoutMode(this.settings.mode);
  }

  /**
   * Apply New Mode
   * @param newLayoutMode
   */
  applyNewLayoutMode(newLayoutMode) {
    this.modes.map((layoutMode) => {
      if (newLayoutMode === layoutMode) {
        this.document.body.classList.add('dt-layout--' + layoutMode);
      } else {
        this.document.body.classList.remove('dt-layout--' + layoutMode);
      }
    });
  }

  ngOnDestroy() {
    this.onSettingChanged.unsubscribe();
  }
}
