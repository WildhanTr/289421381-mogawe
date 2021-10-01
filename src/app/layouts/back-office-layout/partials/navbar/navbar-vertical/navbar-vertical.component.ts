import { Component, ElementRef, HostListener, Inject, IterableDiffers, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { DOCUMENT } from '@angular/common';
import { SettingsService } from '@app/settings/settings.service';
import { DrawerService } from '../../../drawer.service';
import { AuthService } from '@app/layouts/auth-layout/auth.service';
import { UserService } from '@app/services/user.service';

@Component({
  selector: 'app-navbar-vertical',
  templateUrl: './navbar-vertical.component.html',
  styleUrls: ['./navbar-vertical.component.scss']
})
export class NavbarVerticalComponent implements OnInit, OnDestroy {
  settings: any;
  sidebarRef: any;
  activeMenu: string;
  drawer: any;

  currentUser;
  testData;

  onSettingChanged: Subscription;
  onDrawerChanged: Subscription;
  differ: any;

  constructor(eleRef: ElementRef,
    private settingService: SettingsService,
    @Inject(DOCUMENT) private document: any,
    private drawerService: DrawerService,
    private userService: UserService,
    differs: IterableDiffers,
    private authService: AuthService) {
    this.differ = differs.find([]).create(null);
    this.userService.getRefresh().subscribe((value: any) => {
      if (value) {
        this.currentUser = value
      }
    })
    this.sidebarRef = eleRef.nativeElement;
    this.sidebarRef.classList.add('dt-sidebar');

    this.onDrawerChanged = this.drawerService.onDrawerChanged.subscribe((drawer) => {
      this.drawer = drawer;
      this.activeMenu = this.drawer.activeMenu;

      if (!this.drawer.isOpen) {
        this.activeMenu = '';
      }
    });

    this.onSettingChanged = this.settingService.onSettingChanged.subscribe((settings) => {
      this.settings = settings;
      this.toggleUpdateNavigation();
    });
  }


  ngDoCheck() {
    const change = this.differ.diff([this.currentUser]);
    if (change) {
      this.userService.getRefresh().subscribe((value: any) => {
        if (value) {
          this.currentUser = value
        }
      })
    }
  }


  @HostListener('mouseenter')
  onMouseEnter() {
    if (this.settings.navigationStyle === 'folded') {
      this.document.body.classList.add('dt-sidebar--expended');
    }
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    if (this.settings.navigationStyle === 'folded') {
      this.document.body.classList.remove('dt-sidebar--expended');
    }
  }

  @HostListener('window:resize')
  onResize() {
    this.toggleUpdateNavigation();
  }

  ngOnInit(): void {
    setInterval(() => {
      if(JSON.parse(localStorage.getItem("currentUser")) != null){
        this.userService.getProfile().subscribe(data => {
          if(data){
            this.userService.setRefresh(data.object);
          }
        })
      }
    }, 5000);
  }

  toggleUpdateNavigation() {
    if (this.settings.navigationStyle === 'drawer' || window.innerWidth < 992) {
      this.sidebarRef.classList.add('dt-drawer');
      this.sidebarRef.classList.add('position-left');

      if (this.settings.activeNavDrawer) {
        this.sidebarRef.classList.add('open');
      } else {
        this.sidebarRef.classList.remove('open');
      }
    } else {
      this.sidebarRef.classList.remove('dt-drawer');
      this.sidebarRef.classList.remove('position-left');

      if (window.innerWidth >= 992 && this.settings.activeNavDrawer) {
        this.settings.activeNavDrawer = false;
        this.settingService.setSettings(this.settings);
      }
    }
  }

  /**
   * On Click Menu
   */
  onClickMenu(event, activeMenu) {
    event.preventDefault();

    this.drawer.activeMenu = this.activeMenu = activeMenu;
    this.drawer.isOpen = true;
    this.drawerService.update(this.drawer);
  }

  /**
   * Logout user
   * @param event
   */
  onLogout(event) {
    event.preventDefault();
    this.authService.logout();
  }

  ngOnDestroy() {
    this.onSettingChanged.unsubscribe();
    this.onDrawerChanged.unsubscribe();
  }

}
