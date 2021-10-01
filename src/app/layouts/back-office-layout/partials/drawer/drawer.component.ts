import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {SettingsService} from '@app/settings/settings.service';
import {DrawerService} from '../../drawer.service';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss']
})
export class DrawerComponent implements OnInit, OnDestroy {
  settings: any;
  activeMenu: string;
  showLoader = false;
  drawer: any;
  onDrawerChanged: Subscription;
  onSettingChanged: Subscription;

  constructor(private drawerService: DrawerService, private settingService: SettingsService) {
    this.onDrawerChanged = this.drawerService.onDrawerChanged.subscribe((drawer: any) => {
      if (!this.activeMenu) {
        this.processLoader();
      }

      this.drawer = drawer;
      this.activeMenu = this.drawer.activeMenu;

      if (!this.drawer.isOpen) {
        this.activeMenu = '';
      }
    });

    this.onSettingChanged = this.settingService.onSettingChanged.subscribe((settings) => {
      this.settings = settings;
    });
  }

  ngOnInit() {
  }

  processLoader() {
    this.showLoader = true;

    setTimeout(() => {
      this.showLoader = false;
    }, 1000);
  }

  /**
   * Close Drawer
   * @param event
   */
  closeDrawer(event) {
    event.preventDefault();

    this.drawer.isOpen = false;
    this.drawerService.update(this.drawer);
  }

  onSelectMenu(event, activeMenu) {
    event.preventDefault();
    this.processLoader();

    this.drawer.activeMenu = this.activeMenu = activeMenu;
    this.drawerService.update(this.drawer);
  }

  ngOnDestroy() {
    this.onDrawerChanged.unsubscribe();
    this.onSettingChanged.unsubscribe();
  }

}
