import { Component, OnInit } from '@angular/core';
import { UserLogin } from '../models/user';
import { LoginService } from './login.service';
import { Observable } from 'rxjs/Observable';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public userLogin: UserLogin = new UserLogin();
  public userResponse: any;

  constructor(private _loginService: LoginService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.userLogin);
    this._loginService.getToken(this.userLogin)
      .subscribe(
        result => {
          console.log(result);
          this.userResponse = result;
          localStorage.setItem('token', `JWT ${this.userResponse.token}`);
          this.router.navigate(['/employee']);
        },
        err => {console.log(err)}
      );
  }
}
