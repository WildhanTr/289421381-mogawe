import { Component, Input, OnDestroy, ViewEncapsulation } from '@angular/core';
import { NavigationService } from './navigation.service';
import { Subscription } from 'rxjs/Subscription';
import { MatDialog } from '@angular/material';
import { OfferBusinessComponent } from '@app/content/setting/offer/offer-business/offer-business.component';
import { OfferSupplierComponent } from '@app/content/setting/offer/offer-supplier/offer-supplier.component';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class NavigationComponent implements OnDestroy {
  @Input('layout') layout = 'vertical';
  navigation: any[];
  headerMenu: any[];
  navChangedSubscription: Subscription;
  onHeaderMenuSubscription: Subscription;
  currentUser;

  constructor(
    public dialog: MatDialog,
    private navService: NavigationService) {
    this.currentUser = JSON.parse(localStorage.getItem("currentUser"))
    this.navChangedSubscription = this.navService.onNavigationChanged.subscribe(
      (newNavsData) => {
        this.navigation = newNavsData;
      }
    );

    this.onHeaderMenuSubscription = this.navService.onHeaderMenuChanged.subscribe(
      (headerMenu) => {
        this.headerMenu = headerMenu;
      }
    );
  }

  ngOnDestroy() {
    this.navChangedSubscription.unsubscribe();
  }
  
  flyerBusinessOfferClick() {
    this.dialog.open(OfferBusinessComponent)
  }

  flyerSupplierOfferClick() {
    this.dialog.open(OfferSupplierComponent)
  }
}
