import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Headers } from '@angular/http';
import { forkJoin } from 'rxjs/observable/forkJoin';
import 'rxjs/add/operator/toPromise';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/observable';


const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})};

@Injectable()
export class DepartmentService {
    private apiRoot: String = 'http://localhost:6060/api';

    constructor(private httpClient: HttpClient) { }

    getDepartment() {
        return this.httpClient.get(`${this.apiRoot}/departments`);
    }

    add(de) {
        const body = JSON.stringify(de);
        return this.httpClient.post(`${this.apiRoot}/departments`, de, httpOptions);
    }

    update(de) {
        const body = JSON.stringify(de);
        return this.httpClient.put(`${this.apiRoot}/departments/${de._id}`, body, httpOptions);
    }

    delete(id) {
        return this.httpClient.delete(`${this.apiRoot}/departments/${id}`);
    }
}
