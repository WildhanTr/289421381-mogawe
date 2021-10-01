import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatRoutingModule } from './chat-routing.module';
import { SharedModule } from '@gaxon/modules';
import { CardsModule } from '@gaxon/components';
import { AmChartsModule } from '@amcharts/amcharts3-angular';
import { NgxEchartsModule } from 'ngx-echarts';
import { ChartistModule } from 'ng-chartist';
import { TagInputModule } from 'ngx-chips';
import { AgmCoreModule } from '@agm/core';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { ChatComponent } from './chat.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatRadioModule} from '@angular/material/radio';
import { AppConstant } from '../constant/AppConstant';


@NgModule({
  declarations: [ChatComponent],
  imports: [
    CommonModule,
    ChatRoutingModule,
    SharedModule,
    CardsModule,
    AmChartsModule,
    NgxEchartsModule,
    ChartistModule,
    TagInputModule,
    MatTabsModule,
    MatRadioModule,
    AgmCoreModule.forRoot({
      apiKey: AppConstant.GMAP_API_KEY
    }),
    NgxDaterangepickerMd.forRoot()
  ]
})
export class ChatModule { }
