import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

    userSignup: FormGroup;
    loading: Boolean;
    // UserService = new UserService();

  constructor(
      private router: Router,
      private fb: FormBuilder) {

  }

  ngOnInit() {
      this.userSignup = this.fb.group({
          username: ['', Validators.required],
          password: ['', Validators.required]
      });
  }

  goHome() {
      this.router.navigate(['/home']);
  }

  onLogin() {
      return
  }

  // onLogin() {
  //   let token = this.UserService.getUserToken(this.userLogin.value.username, this.userLogin.value.password);
  //   if (token) {
  //       // redirect to profile page of given user token
  //   } else {
  //       this.error = 'invalid creds bro';
  //   }
  // }

}
