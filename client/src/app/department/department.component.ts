import { Component, OnInit, ViewChild } from '@angular/core';
import { DepartmentService } from './department.service';
import { Department } from '../models/department';
import { Router } from '@angular/router';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  public departments: any;
  public department: Department = new Department();
  
  public role = localStorage.getItem('role');

  constructor(private _departmentService: DepartmentService, private router: Router) { }
  @ViewChild('f') form: any;

  onUpdate(val) {
    this.department = val;
  }

  onAdd() {
    this.department = new Department();
    //document.getElementById(`modalDepartment`).style.display = `block`;
    //document.getElementById(`modalDepartment`).setAttribute(`aria-hidden`, `false`);

    ;
  }

  onDelete(id) {

    if (confirm(`Do you want to delete this Department ?`)) {
      this._departmentService.delete(id).subscribe(
        result1 => {
          console.log(result1);
          this.departments = result1;
        },
        err => {
          console.log(err);
          console.log(`deleted`);
        },
      );
    }
  }
  onSubmit() {
    if (this.department._id === 0) {
      const body = this.department;
      return this._departmentService.add(body)
        .subscribe(
          result1 => {
            this.departments = result1;
            document.getElementById(`modalDepartment`).style.display = `none`;
            document.getElementById(`modalDepartment`).setAttribute(`aria-hidden`, `true`);
            document.getElementById(`modalDepartment`).setAttribute(`class`, `modal fade`);
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
        data => {
          this.departments = data;
        },
        err => {
          console.log(err);
          this.router.navigate(['/login']);
        },
        () => console.log('done loading')
      );
  }
}
