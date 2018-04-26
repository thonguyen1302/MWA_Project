import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs/observable/forkJoin';
import { environment } from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable()
export class CustomerService {
  private apiRoot: String = `${environment.apiUrl}/api`;

  constructor(private httpClient: HttpClient) { }

  getcustomers() {
    return this.httpClient.get(`${this.apiRoot}/customers`);
  }
  add(de) {
    const body = JSON.stringify(de);
    return this.httpClient.post(`${this.apiRoot}/customers`, body, httpOptions);
  }

  update(de) {
    const body = JSON.stringify(de);
    return this.httpClient.put(`${this.apiRoot}/customers/${de._id}`, body, httpOptions);
  }

  delete(id) {
    return this.httpClient.delete(`${this.apiRoot}/customers/${id}`);
  }
}
