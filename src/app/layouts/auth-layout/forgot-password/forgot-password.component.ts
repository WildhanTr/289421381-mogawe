import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ChangePassword } from '@app/model/changePassword';
import { ForgotPassword } from '@app/model/forgotPassword';
import { UserService } from '@app/services/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  isForgotForm = true
  isLoading = false
  isAfterForgotForm = false

  forgotPassword = new ForgotPassword
  
  email = new FormControl('');

  constructor(private router: Router,
    private toastr: ToastrService,
    private userService: UserService,) {
    this.isForgotForm = true
  }

  ngOnInit(): void {
  }

  onSubmitResetPassword() {
    this.isLoading = true
    this.forgotPassword.email = this.email.value
    this.userService.forgotPassword(this.forgotPassword).subscribe(
      data => {
        this.isLoading = false
        this.isForgotForm = false
        this.isAfterForgotForm = true
      },
      error => {
        this.isForgotForm = true
        this.isAfterForgotForm = false
        this.isLoading = false
        this.toastr.error(error);
      }
    )
  }


}
