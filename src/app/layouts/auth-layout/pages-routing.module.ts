import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthComponent} from './auth.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import {SigninComponent} from './signin/signin.component';
import {SignupComponent} from './signup/signup.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'signin',
        component: SigninComponent,
        data: {
          title: "Login",
          breadcrumb: "Login"
        }
      },
      {
        path: 'signup',
        component: SignupComponent,
        data: {
          title: "Register",
          breadcrumb: "Register"
        }
      },
      {
        path: 'forgot-password',
        component: ForgotPasswordComponent,
        data: {
          title: "Forgot Password",
          breadcrumb: "Forgot Password"
        }
      },
      {
        path: 'reset-password',
        component: ResetPasswordComponent,
        data: {
          title: "Reset Password",
          breadcrumb: "Reset Password"
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {
}
