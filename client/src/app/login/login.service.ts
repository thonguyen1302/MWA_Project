import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { forkJoin } from 'rxjs/observable/forkJoin';
import 'rxjs/add/operator/toPromise';
import { Jsonp } from '@angular/http';
import { environment } from '../../environments/environment';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class LoginService {
    private apiRoot: String = `${environment.apiUrl}/api`;

    constructor(private httpClient: HttpClient) { }

    getToken(user) {
        const data = JSON.stringify(user);
        return this.httpClient.post(`${this.apiRoot}/sign_in`, data, httpOptions);
    }
}
