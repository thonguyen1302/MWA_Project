import { Component, OnInit } from '@angular/core';
import { UserLogin } from '../models/user';
import { LoginService } from './login.service';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

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
    localStorage.clear();
  }

  onSubmit() {
    console.log(this.userLogin);
    this._loginService.getToken(this.userLogin)
      .subscribe(
        result => {
          console.log(result);
          this.userResponse = result;
          localStorage.setItem('token', `JWT ${this.userResponse.token}`);
          if (this.userResponse.role === 'admin') {
            this.router.navigate(['/admin']);
          } else if (this.userResponse.role === 'employee') {
            this.router.navigate(['/employee']);
          }
          localStorage.setItem('name', this.userResponse.name);
        },
        err => { console.log(err); }
      );
  }
}
