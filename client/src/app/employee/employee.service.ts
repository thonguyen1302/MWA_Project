import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs/observable/forkJoin';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable()
export class EmployeeService {
  private apiRoot: String = 'http://localhost:6060/api';

  constructor(private httpClient: HttpClient) { }

  getEmployees() {
    return this.httpClient.get(`${this.apiRoot}/employees`);
  }
  ///auth/sign_in
  add(de) {
    const body = JSON.stringify(de);
    return this.httpClient.post(`http://localhost:6060/api/register`, body, httpOptions);
  }

  update(de) {
    const body = JSON.stringify(de);
    return this.httpClient.put(`${this.apiRoot}/employees/${de._id}`, body, httpOptions);
  }

  delete(id) {
    return this.httpClient.delete(`${this.apiRoot}/employees/${id}`);
  }
}
