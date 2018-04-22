import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs/observable/forkJoin';

@Injectable()
export class DBService {
  private apiRoot: string = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getEmployees() {
    return this.http.get(`${this.apiRoot}/api/employees`);
  }

}
