import { Component, OnInit, ViewChild } from '@angular/core';
import { DepartmentService } from './department.service';
import { Department } from '../models/department';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  public departments: any;
  public department: Department = new Department();
  constructor(private _departmentService: DepartmentService) { }
  @ViewChild('f') form: any;

  onUpdate() {
    const body = this.form.value;
    this._departmentService.update(body).subscribe(
      result1 => { console.log(result1); },
      err => {
        console.log(err);
        console.log(`submit`);
      },
    );
  }
  onDelete(id) {
    this._departmentService.delete(id).subscribe(
      result1 => { console.log(result1); },
      err => {
        console.log(err);
        console.log(`deleted`);
      },
    );
  }
  onSubmit() {
    debugger;
    const body = this.form.value;
    return this._departmentService.add(body)
    .subscribe(
      result1 => { console.log(result1); },
      err => {
        console.log(err);
        console.log(`submit`);
      },
    );
  }
  ngOnInit() {
    this.getDepartments();
  }

  getDepartments() {
    this._departmentService.getDepartment()
      .subscribe(
        data => { this.departments = data; },
        err => console.log(err),
        () => console.log('done loading')
      );
  }
}
