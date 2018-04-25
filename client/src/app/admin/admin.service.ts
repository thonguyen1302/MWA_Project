import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs/observable/forkJoin';
import { environment } from '../../environments/environment';

@Injectable()
export class adminService {
  private apiRoot: string = `${environment.apiUrl}`;

  constructor(private httpClient: HttpClient) { }

  getEmployees() {
    return this.httpClient.get(`${this.apiRoot}/api/employees`);
  }

  getDepartment() {
    return this.httpClient.get(`${this.apiRoot}/api/departments`);
  }
}
