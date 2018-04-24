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

  onUpdate(val) {
    // tslint:disable-next-line:no-debugger
    debugger;
    this.department = val;
  }

  onAdd() {
    this.department = new Department();
  }

  onDelete(id) {
    this._departmentService.delete(id).subscribe(
      result1 => {
        console.log(result1);
        this.departments = result1;
        $('#modalDepartment').modal('hide');
      },
      err => {
        console.log(err);
        console.log(`deleted`);
      },
    );
  }
  onSubmit() {
    // tslint:disable-next-line:no-debugger
    debugger;
    if (this.department._id === 0) {
      const body = this.department;
      return this._departmentService.add(body)
        .subscribe(
          result1 => {
            this.departments = result1;
            $('#modalDepartment').modal('hide');
          },
          err => {
            console.log(err);
          },
      );
    } else {
      const body = this.department;
      this._departmentService.update(body).subscribe(
        result1 => {
        this.departments = result1;
          $('#modalDepartment').modal('hide');
        },
        err => {
          console.log(err);
          console.log(`submit`);
        },
      );
    }
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
