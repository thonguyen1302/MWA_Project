import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs/observable/forkJoin';
import { environment } from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable()
export class EmployeeService {
  private apiRoot: String = `${environment.apiUrl}/api`;
  private crole = localStorage.getItem('role');
  constructor(private httpClient: HttpClient) { }

  getEmployees() {
    console.log(`${this.crole}`);
    return this.httpClient.get(`${this.apiRoot}/employees?role=${this.crole}`);
  }
  ///auth/sign_in
  add(de) {
    const body = JSON.stringify(de);
    return this.httpClient.post(`${environment.apiUrl}/api/register?role=${this.crole}`, body, httpOptions);
  }

  update(de) {
    const body = JSON.stringify(de);
    return this.httpClient.put(`${this.apiRoot}/employees/${de._id}?role=${this.crole}`, body, httpOptions);
  }

  delete(id) {
    return this.httpClient.delete(`${this.apiRoot}/employees/${id}?role=${this.crole}`);
  }
}
