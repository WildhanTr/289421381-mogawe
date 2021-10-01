import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateComponent } from './create/create.component';
import { BussinesRoutingModule } from './bussines-routing.module';
import { SharedModule } from '@gaxon/modules';
import { CardsModule } from '@gaxon/components';
import { AmChartsModule } from '@amcharts/amcharts3-angular';
import { NgxEchartsModule} from 'ngx-echarts';
import { ChartistModule } from 'ng-chartist';
import {AgmCoreModule} from '@agm/core';
import {MatInputModule} from '@angular/material';
import {MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AppConstant } from '@app/content/constant/AppConstant';


@NgModule({
  declarations: [CreateComponent],
  imports: [
    CommonModule,
    BussinesRoutingModule,
    SharedModule,
    CardsModule,
    AmChartsModule,
    NgxEchartsModule,
    ChartistModule,
    AgmCoreModule.forRoot({
      apiKey: AppConstant.GMAP_API_KEY
    }),
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
  ]
})
export class BussinesModule { }
