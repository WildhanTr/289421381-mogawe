import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionnaireRoutingModule } from './questionnaire-routing.module';
import { SharedModule } from '@gaxon/modules';
import { CardsModule } from '@gaxon/components';
import { AmChartsModule } from '@amcharts/amcharts3-angular';
import { NgxEchartsModule } from 'ngx-echarts';
import { ChartistModule } from 'ng-chartist';
import { AgmCoreModule } from '@agm/core';
import { QuestionnaireComponent } from './questionnaire.component';
import { FormComponent } from './form/form.component';
import { NewFactComponent } from './form/new-fact/new-fact.component';
import { NewSectionComponent } from './form/new-section/new-section.component';
import { OthersFormComponent } from './others-form/others-form.component';
import { FilterQuestionnaireComponent } from './filter-questionnaire/filter-questionnaire.component';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';


@NgModule({
  declarations: [QuestionnaireComponent, FormComponent, NewFactComponent, NewSectionComponent, OthersFormComponent, FilterQuestionnaireComponent],
  imports: [
    CommonModule,
    QuestionnaireRoutingModule,
    SharedModule,
    CardsModule,
    AmChartsModule,
    NgxEchartsModule,
    ChartistModule,
    MatRadioModule,
    MatCheckboxModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCe30oyb0aY980X3GfHqY7jhqsBMBfI9Ek'
    }),
  ]
})
export class QuestionnaireModule { }
