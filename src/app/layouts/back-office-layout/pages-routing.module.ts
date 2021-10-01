// Angular
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BackOfficeLayoutComponent} from './back-office-layout.component';

const routes: Routes = [
  {
    path: '',
    component: BackOfficeLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('@app/content/pages.module').then(m => m.PagesModule)
      },
      {
        path: 'dashboard',
        loadChildren: () => import('@app/content/pages.module').then(m => m.PagesModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {
}
