import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs/observable/forkJoin';
//const https = require("https");

@Injectable()
export class DBService {
  private apiRoot: string = 'http://localhost:6060';

  constructor(private httpClient: HttpClient) { }

  getEmployees() {
    return this.httpClient.get(`${this.apiRoot}/api/departments`);
  }
}
