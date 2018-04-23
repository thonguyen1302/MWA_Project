import { Component, OnInit } from '@angular/core';
import { adminService } from './admin.service';
import { Department } from '../models/Department';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public departments: any;
  public department: Department = new Department();
  constructor(private _adminService: adminService) { }

  ngOnInit() {
    this.getDepartments();
  }

  getDepartments() {
    this._adminService.getDepartment()
      .subscribe(
        data => { this.departments = data; },
        err => console.log(err),
        () => console.log('done loading')
      );
  }

  onSubmit() {
    console.log(`submit`);
  }

}
