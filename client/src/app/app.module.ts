import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './admin/admin.component';
import { adminService } from './admin/admin.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './nav/nav.component';
import { DepartmentComponent } from './department/department.component';
import { EmployeeComponent} from './employee/employee.component';

import {DepartmentService} from './department/department.service';
import { EmployeeService } from './employee/employee.service';
import {LoginService} from './login/login.service';
import {Routes, RouterModule} from '@angular/router';

const routesConfig: Routes = [
  {path: 'admin', component: AdminComponent},
  {path: 'employee', component: EmployeeComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    AdminComponent,
    LoginComponent,
    NavComponent,
    DepartmentComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routesConfig),
  ],
  providers: [adminService, DepartmentService, EmployeeService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
