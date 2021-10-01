import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgProgressModule} from 'ngx-progressbar';
import {SigninComponent} from './signin/signin.component';
import {AuthComponent} from './auth.component';
import {SharedModule} from '@gaxon/modules';
import {RouterModule} from '@angular/router';
import {PagesRoutingModule} from './pages-routing.module';
import {SignupComponent} from './signup/signup.component';
import {HeaderComponent} from './header/header.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    NgProgressModule,
    RouterModule,
    PagesRoutingModule,
  ],
  declarations: [
    SigninComponent,
    AuthComponent,
    SignupComponent,
    HeaderComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
  ],
  exports: [
    AuthComponent
  ]
})
export class AuthModule {
}
