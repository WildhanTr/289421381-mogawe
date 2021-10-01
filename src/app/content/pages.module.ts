import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '@gaxon/modules';
import {BlankComponent} from './blank/blank.component';
import { ChatComponent } from './chat/chat.component';
import { NotificationComponent } from './notification/notification.component';
import { ProfileComponent } from './profile/profile.component';

const appsRoutes: Routes = [
  {
    path: '',
    component: BlankComponent,
    data: { title: 'Blank Page' }
  },
  {
    path: 'dashboard',
    loadChildren: () => import('@app/content/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'assignment',
    loadChildren: () => import('@app/content/assignment/assignment.module').then(m => m.AssignmentModule)
  },
  
  {
    path: 'supplier',
    loadChildren: () => import('@app/content/supplier/supplier.module').then(m => m.SupplierModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('@app/content/chat/chat.module').then(m => m.ChatModule)
  },
  {
    path: 'business',
    loadChildren: () => import('@app/content/bussines/bussines.module').then(m => m.BussinesModule)
  },
  {
    path: 'setting',
    loadChildren: () => import('@app/content/setting/setting.module').then(m => m.SettingModule)
  },
  {
    path: 'questionnaire',
    loadChildren: () => import('@app/content/questionnaire/questionnaire.module').then(m => m.QuestionnaireModule)
  },
  {
    path: 'notification',
    loadChildren: () => import('@app/content/notification/notification.module').then(m => m.NotificationModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('@app/content/profile/profile.module').then(m => m.ProfileModule)
  },
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(appsRoutes)
  ],
  declarations: [
    BlankComponent,
    NotificationComponent,
    ProfileComponent,
  ],
})
export class PagesModule {
}
