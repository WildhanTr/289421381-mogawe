import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '@gaxon/modules';
import { CardsModule } from '@gaxon/components';
import { AmChartsModule } from '@amcharts/amcharts3-angular';
import { NgxEchartsModule } from 'ngx-echarts';
import { ChartistModule } from 'ng-chartist';
import { AgmCoreModule } from '@agm/core';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {ChartsModule} from 'ng2-charts';
import { TagInputModule } from 'ngx-chips';
import { GaugeChartModule } from 'angular-gauge-chart';
import { KtdGridModule } from '@katoid/angular-grid-layout';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { AppConstant } from '../constant/AppConstant';



@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    ChartsModule,
    DashboardRoutingModule,
    SharedModule,
    CardsModule,
    AmChartsModule,
    NgxEchartsModule,
    NgxChartsModule,
    ChartistModule,
    MatProgressBarModule,
    TagInputModule,
    GaugeChartModule,
    KtdGridModule,
    AgmCoreModule.forRoot({
      apiKey: AppConstant.GMAP_API_KEY
    }),
  ]
})
export class DashboardModule { }
