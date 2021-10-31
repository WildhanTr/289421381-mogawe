import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { DynamicDomService } from '../../services/dynamic-dom.service';
import {
    BsCardModule, BsMediaObjectModule, CardsModule, GxCardModule, GxIconModule, GxToggleModule, CustomCommonModule,
    ViewsModule,
    WidgetsModule, NotificationsModule, GxBadgeModule, GxBreadcrumbsModule
} from '../../components';
import { DirectivesModule } from '../../directives/directives.module';
import { PipesModule } from '../../pipes/pipes.module';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { MatDialogModule } from '@angular/material/dialog';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule, MatInputModule, MatNativeDateModule, MatProgressSpinnerModule, MatSelectModule, MatSortModule } from '@angular/material';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { PlyrModule } from 'ngx-plyr';
import { NgxFileDropModule } from 'ngx-file-drop';
import { ClipboardModule } from 'ngx-clipboard';

export const MOGAWE_DATE_FORMATS = {
    parse: {
        dateInput: ['DD-MM-YYYY'],
    },
    display: {
        dateInput: 'DD MMMM YYYY',
        monthYearLabel: 'MMM YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'MMMM YYYY',
    },
}
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
        MatSelectModule,
        MatDatepickerModule,
        MatNativeDateModule,
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
        PlyrModule,
        ClipboardModule,
        MatSelectModule,
        MatDatepickerModule,
        MatNativeDateModule
    ],
    providers: [
        DynamicDomService
    ]
})
export class SharedModule {
}
