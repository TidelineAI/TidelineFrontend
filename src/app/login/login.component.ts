import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Wrapper } from 'pivot-backend-api-wrapper/wrapper';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

    userLogin: FormGroup;
    loading: Boolean;
    // UserService = new UserService();

  constructor(
      private router: Router,
      private fb: FormBuilder) {

  }

  ngOnInit() {
      this.userLogin = this.fb.group({
          username: ['', Validators.required],
          password: ['', Validators.required]
      });
  }

  goHome() {
      this.router.navigate(['/home']);
  }

  onLogin() {
    w = new Wrapper();
    console.log(w.login(this.userLogin['username'], this.userLogin['password']));
  }

}
