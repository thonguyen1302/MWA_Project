import { Component, OnInit, Injectable } from '@angular/core';
import { EmployeeService } from '../employee/employee.service';
import { Observable } from 'rxjs/Observable';
import { Employee } from '../models/Employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})


export class EmployeeComponent implements OnInit {
  public employees: any;
  public employee: Employee = new Employee();
  public isShowDialog = true;
  public role = localStorage.getItem('role');

  constructor(private _employeeService: EmployeeService) { }

  ngOnInit() {
    this.getEmployees();
  }

  getEmployees() {
    this._employeeService.getEmployees()
      .subscribe(
        data => { console.log(this.employees); this.employees = data; },
        err => console.error(err),
        () => console.log('done loading Employees'));
  }

  onUpdate(val) {
    debugger;
    this.employee = val;
  }

  onAdd() {
    debugger;
    this.employee = new Employee();
  }

  onDelete(id) {
    if (confirm(`Do you want to delete this Employee ?`)) {
      this._employeeService.delete(id).subscribe(
        result => {
          console.log(result);
          this.employees = result;
        },
        err => {
          console.log(err);
          console.log(`deleted`);
        },
      );
    }
  }
  onSubmit() {
    // tslint:disable-next-line:no-debugger
    debugger;
    if (this.employee._id === 0) {
      if (localStorage.getItem('role') === 'hr') {
        this.employee.role = `employee`;
      }
      
      const body = this.employee;
      return this._employeeService.add(body)
        .subscribe(
          result1 => {
            this.employees = result1;
            this.isShowDialog = false;
            //this.employee = new Employee();
            document.getElementById(`btn_close`).click();
            document.getElementById(`alert`).innerHTML = "Add new successfull";
            document.getElementById(`alert`).style.display = "block";
            setTimeout(function(){ 
              document.getElementById(`alert`).style.display = "none";
            }, 3000);
            return true;
          },
          err => {
            console.log(err);
          },
      );
    } else {
      const body = this.employee;
      this._employeeService.update(body).subscribe(
        result1 => {
          this.employees = result1;
          //$('#modalDepartment').modal('hide');
          document.getElementById(`btn_close`).click();
          document.getElementById(`alert`).innerHTML = "Edit successfull";
          document.getElementById(`alert`).style.display = "block";
          setTimeout(function(){ 
            document.getElementById(`alert`).style.display = "none";
          }, 3000);
        },
        err => {
          console.log(err);
          console.log(`submit`);
        },
      );
    }
  }

}
