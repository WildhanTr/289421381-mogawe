import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfferSupplierComponent } from './offer-supplier/offer-supplier.component';
import { OfferBusinessComponent } from './offer-business/offer-business.component';
import { FormSignBusinessComponent } from './offer-business/form-sign-business/form-sign-business.component';
import { FormSignSupplierComponent } from './offer-supplier/form-sign-supplier/form-sign-supplier.component';
import { SharedModule } from '@gaxon/modules';
import { CardsModule } from '@gaxon/components';
import { AmChartsModule } from '@amcharts/amcharts3-angular';
import { NgxEchartsModule } from 'ngx-echarts';
import { ChartistModule } from 'ng-chartist';
import { AgmCoreModule } from '@agm/core';
import { AppConstant } from '@app/content/constant/AppConstant';



@NgModule({
  declarations: [OfferSupplierComponent, OfferBusinessComponent, FormSignBusinessComponent, FormSignSupplierComponent],

  imports: [
    CommonModule,
    SharedModule,
    CardsModule,
    AmChartsModule,
    NgxEchartsModule,
    ChartistModule,
    AgmCoreModule.forRoot({
      apiKey: AppConstant.GMAP_API_KEY
    }),
  ]
})
export class OfferModule { }
