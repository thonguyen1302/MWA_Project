import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AdminComponent } from './admin/admin.component';
import { adminService } from './admin/admin.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './nav/nav.component';
import { DepartmentComponent } from './department/department.component';
import { EmployeeComponent } from './employee/employee.component';

import { DepartmentService } from './department/department.service';
import { EmployeeService } from './employee/employee.service';
import { LoginService } from './login/login.service';
import { Routes, RouterModule } from '@angular/router';
import { AuthInterceptor } from './utils/AuthInterceptor';
import { CustomerComponent } from './customer/customer.component';
import { CustomerService } from './customer/customer.service';

import { NgReduxModule, NgRedux } from 'ng2-redux';
import { store, IAppState } from './redux-store/index';
import { ComponentActions } from './redux-store/actions2';
const routesConfig: Routes = [
  { path: 'admin', component: AdminComponent },
  { path: 'department', component: DepartmentComponent },
  { path: 'employee', component: EmployeeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'customer', component: CustomerComponent },
  { path: '', component: LoginComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    AdminComponent,
    LoginComponent,
    NavComponent,
    DepartmentComponent,
    CustomerComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routesConfig),
    NgReduxModule
  ],
  providers: [adminService, DepartmentService, EmployeeService, LoginService, CustomerService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule {
    constructor(ngRedux: NgRedux<IAppState>) {
      ngRedux.provideStore(store);
    }
}
