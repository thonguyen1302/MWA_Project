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

  constructor(private httpClient: HttpClient) { }

  getEmployees() {
    const crole = localStorage.getItem('role');
    return this.httpClient.get(`${this.apiRoot}/employees?role=${crole}`);
  }
  ///auth/sign_in
  add(de) {
    const body = JSON.stringify(de);
    return this.httpClient.post(`${environment.apiUrl}/api/register`, body, httpOptions);
  }

  update(de) {
    const body = JSON.stringify(de);
    return this.httpClient.put(`${this.apiRoot}/employees/${de._id}`, body, httpOptions);
  }

  delete(id) {
    return this.httpClient.delete(`${this.apiRoot}/employees/${id}`);
  }
}
