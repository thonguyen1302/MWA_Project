import { Component, OnInit } from '@angular/core';
import { UserLogin } from '../models/user';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public userLogin: UserLogin = new UserLogin();
  constructor(private _loginService: LoginService) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.userLogin);
    this._loginService.getToken(this.userLogin).subscribe(
      result => {
        debugger;
        console.log(result);
      },
      err => {}
    );
  }

}
