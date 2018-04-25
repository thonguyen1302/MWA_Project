import { Component, OnInit, Input } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  @Input() role: String;

  public name = localStorage.getItem('name');


  constructor(private router: Router) {}

  ngOnInit() {
  }
  onLogout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
