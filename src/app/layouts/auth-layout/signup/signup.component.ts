import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, FormControl } from '@angular/forms';
import { AuthService } from '../auth.service';
import { ToastContainerDirective, ToastrService } from 'ngx-toastr';
import { UserService } from '@app/services/user.service';
import { Router } from '@angular/router';
import { Registration } from '@app/model/registration';
import { ChatService } from '@app/services/chat.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  registration = new Registration()
  company = new FormControl('');
  fullName = new FormControl('');
  phone = new FormControl('');
  email = new FormControl('');
  password = new FormControl('');
  code = new FormControl('');

  isLoading = false
  isRegisterForm = true
  isActivationForm = false

  @ViewChild('signUpForm') form: NgForm;

  @ViewChild(ToastContainerDirective) inlineContainer: ToastContainerDirective;
  constructor(private router: Router,
    private authService: AuthService,
    private chatService: ChatService,
    private toastr: ToastrService,
    private userService: UserService) {
    this.isRegisterForm = true
  }

  ngOnInit() {
  }

  onSubmitSignup() {
    this.isLoading = true
    this.registration.company = this.company.value
    this.registration.fullName = this.fullName.value
    this.registration.phone = this.phone.value
    this.registration.email = this.email.value
    this.registration.password = this.password.value
    this.userService.registration(this.registration).subscribe(
      data => {
        this.isLoading = false
        this.isRegisterForm = false
        this.isActivationForm = true
        this.sendEmailActivation(this.registration.email)
      },
      error => {
        this.isRegisterForm = true
        this.isActivationForm = false
        this.isLoading = false
        this.toastr.error(error);
      }
    )
  }

  codeForm = {
    email: null,
    code: null
  }

  timeLeft: number = 60;
  interval;

  startTimer() {
    this.timeLeft = 60;
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.pauseTimer()
      }
    }, 1000)
  }

  pauseTimer() {
    clearInterval(this.interval);
  }

  sendEmailActivation(email: string) {
    this.userService.sendCodeEmailActivation(email).subscribe(
      data => {
        this.startTimer()
        this.codeForm.email = this.registration.email
      }, error => {
        console.log(error)
      }
    )
  }

  onActivationCodeSubmit() {
    this.codeForm.code = this.code.value
    this.userService.sendCodeEmailActivationPost(this.codeForm.email, this.codeForm.code).subscribe(
      data => {
        this.userService.login(this.registration.email, this.registration.password).subscribe(
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
      }, error => {
        console.log(error)
      }
    )
  }

  loadProfil() {
    this.userService.getProfile().subscribe(data => {
      this.userService.setRefresh(data.object);
      this.router.navigate(['dashboard']);
    })
  }

  onSubmitActivationCode() {

  }

}
