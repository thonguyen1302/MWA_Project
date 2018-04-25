import { Component, OnInit } from '@angular/core';
import { UserLogin } from '../models/user';
import { LoginService } from './login.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public userLogin: UserLogin = new UserLogin();
  public userResponse: any;

  constructor(private _loginService: LoginService) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.userLogin);
    this._loginService.getToken(this.userLogin)
      .subscribe(
        result => {
          this.userResponse = result;
          localStorage.setItem('token', `JWT ${this.userResponse.token}`);
        },
        err => { }
      );
  }
}
