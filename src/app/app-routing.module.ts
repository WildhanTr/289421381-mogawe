import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@app/layouts/auth-layout/auth.guard';

const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/dashboard'
  },
  {
    path: '',
    loadChildren: './layouts/auth-layout/auth.module#AuthModule'
  },
  {
    path: '',
    loadChildren: './layouts/back-office-layout/back-office-layout.module#BackOfficeLayoutModule',
    canActivate: [AuthGuard]
  },
  {
    path: '',
    loadChildren: './content/invitation/invitation.module#InvitationModule'
  },
  {
    path: '**',
    redirectTo: '/dashboard'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
