import { Component, ViewChild } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { UserService } from '@app/services/user.service';
import { Router } from '@angular/router';
import { ToastrService, ToastContainerDirective } from 'ngx-toastr';
import { ChatService } from '@app/services/chat.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {
  email = new FormControl('');
  password = new FormControl('');
  keepMeLoggedIn = new FormControl(true);

  isLoading = false
  @ViewChild('signinForm') form: NgForm;

  @ViewChild(ToastContainerDirective) inlineContainer: ToastContainerDirective;
  
  constructor(private router: Router,
    private authService: AuthService,
    private chatService: ChatService,
    private toastr: ToastrService,
    private userService: UserService) { }

  onSubmitSignIn() {
    this.isLoading = true
    this.userService.login(this.email.value, this.password.value).subscribe(
      data => {
        localStorage.setItem("jwt", data.token)
        localStorage.setItem("role", data.type)
        var body = {
          "user_id": this.email.value,
          "password": this.password.value,
          "username": this.email.value,
          "avatar_url": "https://d1edrlpyc25xu0.cloudfront.net/kiwari-prod/image/upload/75r6s_jOHa/1507541871-avatar-mine.png"
        }
        this.chatService.loginOrRegister(body).subscribe(
          data => { }, error => { console.log(error) }
        )
        this.loadProfil()
      },
      error => {
        this.isLoading = false
        this.toastr.error(error);
      }
    )
  }

  loadProfil() {
    this.userService.getProfile().subscribe( data => {
      this.userService.setRefresh(data.object);
      this.router.navigate(['dashboard']);
    })
  }

}
