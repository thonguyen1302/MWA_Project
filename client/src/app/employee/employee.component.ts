import { Component, OnInit, Injectable } from '@angular/core';
import { DBService } from '../employee.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})


export class EmployeeComponent implements OnInit {
  public employees;

  constructor(private _dbService: DBService) { }

  ngOnInit() {
    this.getEmployees();
  }

  getEmployees() {
    this._dbService.getEmployees()
      .subscribe(
        data => this.employees = data,
        err => console.error(err),
        () => console.log('done loading Employees'));
  }

}



//   ngOnInit() {
//     this.getFoods();
//     this.getBooksAndMovies();
//   }

//   getFoods() {
//     this._demoService.getFoods()
//       .subscribe(
//         data => this.foods = data,
//         err => console.error(err),
//         () => console.log('done loading foods'));
//   }

//   createFood(name) {
//     let food = { name: name };
//     this._demoService.createFood(food)
//       .subscribe(
//         data => {
//           this.getFoods(); return true;
//         }, error => {
//           console.error('Error saving food');
//           return Observable.throw(error);
//         });
//   }

//   updateFood(food){
//     this._demoService.updateFood(food)
//       .subscribe(
//         data => {
//           this.getFoods(); return true;
//         }, error => {
//           console.error('Error updating food');
//           return Observable.throw(error);
//         });
//   }

//   deleteFood(food){
//     if (confirm("Are you sure you want to delete " + food.name + "?")) {
//       this._demoService.deleteFood(food)
//       .subscribe(
//         data => {
//           this.getFoods(); return true;
//         }, error => {
//           console.error('Error deleting food');
//           return Observable.throw(error);
//         });
    
//     }
//   }

//   getBooksAndMovies() {
//     this._demoService.getBooksAndMovies().subscribe(
//       data => {
//         this.books = data[0],
//           this.movies = data[1]
//       },
//       err => console.error(err),
//       () => console.log('done loading books and movies')
//     );
//   }


// }
