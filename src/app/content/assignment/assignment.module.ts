import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@gaxon/modules';
import { CardsModule } from '@gaxon/components';
import { AmChartsModule } from '@amcharts/amcharts3-angular';
import { NgxEchartsModule } from 'ngx-echarts';
import { ChartistModule } from 'ng-chartist';
import { TagInputModule } from 'ngx-chips';
import { AgmCoreModule } from '@agm/core';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { AssignmentRoutingModule } from './assignment-routing.module';
import {  AssignmentComponent } from './assignment.component';
import  {MatCurrencyFormatModule} from 'mat-currency-format';
import { AppConstant } from '../constant/AppConstant';
import { AssignmentDemandComponent } from './assignment-demand/assignment-demand.component';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import {OwlDateTimeModule, OwlNativeDateTimeModule} from 'ng-pick-datetime';
import { QRCodeModule } from 'angularx-qrcode'

@NgModule({
  declarations: [AssignmentComponent, AssignmentDemandComponent],
  imports: [
    CommonModule,
    AssignmentRoutingModule,
    SharedModule,
    CardsModule,
    AmChartsModule,
    NgxEchartsModule,
    ChartistModule,
    TagInputModule,
    MatCurrencyFormatModule,
    AgmCoreModule.forRoot({
      apiKey: AppConstant.GMAP_API_KEY
    }),
    NgxDaterangepickerMd.forRoot(),
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    QRCodeModule
  ],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { displayDefaultIndicatorType: false }
    }
  ],
})
export class AssignmentModule { }
