import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {DynamicDomService} from '../../services/dynamic-dom.service';
import {
  BsCardModule, BsMediaObjectModule, CardsModule, GxCardModule, GxIconModule, GxToggleModule, CustomCommonModule,
  ViewsModule,
  WidgetsModule, NotificationsModule, GxBadgeModule, GxBreadcrumbsModule
} from '../../components';
import {DirectivesModule} from '../../directives/directives.module';
import {PipesModule} from '../../pipes/pipes.module';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import {MatDialogModule} from '@angular/material/dialog';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import {MatAutocompleteModule, MatDatepickerModule, MatInputModule, MatNativeDateModule, MatProgressSpinnerModule, MatSelectModule, MatSortModule} from '@angular/material';
import {MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { PlyrModule } from 'ngx-plyr';
import { NgxFileDropModule } from 'ngx-file-drop';
import { ClipboardModule } from 'ngx-clipboard';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';


@NgModule({
  imports: [
    CommonModule,
    SweetAlert2Module,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    GxCardModule,
    GxIconModule,
    ViewsModule,
    BsCardModule,
    BsMediaObjectModule,
    NotificationsModule,
    WidgetsModule,
    GxToggleModule,
    CardsModule,
    GxBadgeModule,
    GxBreadcrumbsModule,
    CustomCommonModule,
    DirectivesModule,
    PipesModule,
    MatDialogModule,
    DragDropModule,
    MatExpansionModule,
    MatIconModule,
    MatInputModule,
    MatStepperModule,
    MatFormFieldModule,
    MatSlideToggleModule,
    MatSortModule,
    MatAutocompleteModule,
    MatNativeDateModule,
    MatDatepickerModule
  ],
  declarations: [
  ],
  exports: [
    SweetAlert2Module,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    GxCardModule,
    GxIconModule,
    ViewsModule,
    BsCardModule,
    BsMediaObjectModule,
    WidgetsModule,
    GxToggleModule,
    CardsModule,
    GxBadgeModule,
    GxBreadcrumbsModule,
    CustomCommonModule,
    DirectivesModule,
    TranslateModule,
    PipesModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    DragDropModule,
    MatExpansionModule,
    MatIconModule,
    MatInputModule,
    MatStepperModule,
    MatFormFieldModule,
    MatSlideToggleModule,
    NgxFileDropModule,
    MatSelectModule,
    PlyrModule,
    ClipboardModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [
    DynamicDomService,
    {
        provide: STEPPER_GLOBAL_OPTIONS,
        useValue: { displayDefaultIndicatorType: false }
    }
  ]
})
export class SharedModule {
}
