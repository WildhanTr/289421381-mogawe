import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {TranslateModule} from '@ngx-translate/core';

import {GxIconModule} from '../gx-icon/gx-icon.module';

import {NavVerticalCollapseComponent} from './vertical/nav-collapse/nav-collapse.component';
import {NavVerticalGroupComponent} from './vertical/nav-group/nav-group.component';
import {NavVerticalItemComponent} from './vertical/nav-item/nav-item.component';
import {NavHorizontalItemComponent} from './horizontal/nav-item/nav-item.component';
import {NavHorizontalCollapseComponent} from './horizontal/nav-collapse/nav-collapse.component';
import {NavHorizontalMegaComponent} from './horizontal/nav-mega/nav-mega.component';
import {NavigationComponent} from './navigation.component';
import { SharedModule } from '@gaxon/modules';
import { CardsModule } from '../cards/cards.module';
import { AmChartsModule } from '@amcharts/amcharts3-angular';
import { NgxEchartsModule } from 'ngx-echarts';
import { ChartistModule } from 'ng-chartist';
import { AgmCoreModule } from '@agm/core';
import { AppConstant } from '@app/content/constant/AppConstant';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    GxIconModule,
    RouterModule,
    SharedModule,
    CardsModule,
    AmChartsModule,
    NgxEchartsModule,
    ChartistModule,
    AgmCoreModule.forRoot({
      apiKey: AppConstant.GMAP_API_KEY
    }),
  ],
  declarations: [
    NavigationComponent,
    NavVerticalCollapseComponent,
    NavVerticalGroupComponent,
    NavVerticalItemComponent,
    NavHorizontalItemComponent,
    NavHorizontalCollapseComponent,
    NavHorizontalMegaComponent
  ],
  exports: [
    NavigationComponent
  ]
})
export class NavigationModule {
}
