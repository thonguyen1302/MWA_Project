import { Component, OnInit } from '@angular/core';
import { Customer } from '../models/Customer';
import { CustomerService } from './customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  public customers: any;
  public customer: Customer = new Customer();
  public isShowDialog = true;

  constructor(private _customerService: CustomerService) { }

  ngOnInit() {
    this.getcustomers();
  }

  getcustomers() {
    debugger;
    this._customerService.getcustomers()
      .subscribe(
        data => { console.log(this.customers); this.customers = data; },
        err => console.error(err),
        () => console.log('done loading customers'));
  }

  onUpdate(val) {
    this.customer = val;
  }

  onAdd() {
    this.customer = new Customer();
  }

  onDelete(id) {
    if (confirm(`Do you want to delete this customer ?`)) {
      this._customerService.delete(id).subscribe(
        result => {
          console.log(result);
          this.customers = result;
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
    if (this.customer._id === 0) {
      this.customer.role = `customer`;
      const body = this.customer;
      return this._customerService.add(body)
        .subscribe(
          result1 => {
            this.customers = result1;
            this.isShowDialog = false;
            return true;
          },
          err => {
            console.log(err);
          },
      );
    } else {
      const body = this.customer;
      this._customerService.update(body).subscribe(
        result1 => {
          this.customers = result1;
        },
        err => {
          console.log(err);
          console.log(`submit`);
        },
      );
    }
  }


}
