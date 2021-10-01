import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ChangePassword } from '@app/model/changePassword';
import { ForgotPassword } from '@app/model/forgotPassword';
import { UserService } from '@app/services/user.service';
import { sha256 } from 'js-sha256';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  isChangePassword = false
  isAfterChangePassword = false
  isAfterChangePasswordError = false
  isLoading = false

  code = new FormControl('');

  forgotPassword = new ForgotPassword
  changePassword = new ChangePassword

  newPassword = new FormControl('');
  confirmPassword = new FormControl('');

  constructor(private router: Router,
    private toastr: ToastrService,
    private userService: UserService,
    private route: ActivatedRoute) {
      this.isChangePassword = true
      this.loadParamsEmail() }

  ngOnInit(): void {
  }

  loadParamsEmail() {
    this.route.queryParams.subscribe(params => {
      this.code = params['code'];
      this.userService.checkCodeForgotPasswordCode(this.code).subscribe(
        data => {
          if (data.returnValue === '000') {
            this.isChangePassword = true
            this.forgotPassword.email = data.object.emailUser
            this.changePassword.code = data.object.code
          }
          console.log(data)
        }, error => {
          this.isChangePassword = false
          this.isAfterChangePasswordError = true
          this.toastr.error(error)
        }
      )
    });
  }

  

  onSubmitChangePassword() {
    this.isLoading = true
    this.changePassword.newPassword = sha256(this.newPassword.value)
    this.changePassword.confirmPassword = sha256(this.confirmPassword.value)
    this.userService.changePasswordPost(this.changePassword).subscribe(
      data => {
        this.isLoading = false
        this.isChangePassword = false
        this.isAfterChangePassword = true
      },
      error => {
        this.isLoading = false
        this.isAfterChangePasswordError = true
        this.toastr.error(error);
      }
    )
  }

}
