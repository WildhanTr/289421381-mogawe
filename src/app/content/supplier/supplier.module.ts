import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupplierRoutingModule } from './supplier-routing.module';
import { ProductsComponent } from './products/products.component';
import { SharedModule } from '@gaxon/modules';
import { CardsModule } from '@gaxon/components';
import { AmChartsModule } from '@amcharts/amcharts3-angular';
import { NgxEchartsModule } from 'ngx-echarts';
import { ChartistModule } from 'ng-chartist';
import { TagInputModule } from 'ngx-chips';
import { MatSliderModule } from '@angular/material';
import { GaugeChartModule } from 'angular-gauge-chart';
import { AgmCoreModule } from '@agm/core';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { OrdersComponent } from './orders/orders.component';
import { AppConstant } from '../constant/AppConstant';


@NgModule({
  declarations: [ ProductsComponent, OrdersComponent],
  imports: [
    CommonModule,
    SupplierRoutingModule,
    SharedModule,
    CardsModule,
    AmChartsModule,
    NgxEchartsModule,
    ChartistModule,
    TagInputModule,
    MatSliderModule,
    GaugeChartModule,
    AgmCoreModule.forRoot({
      apiKey: AppConstant.GMAP_API_KEY
    }),
    NgxDaterangepickerMd.forRoot()
  ]
})
export class SupplierModule { }
