import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  filter = 'All';

  constructor() { }

  ngOnInit() {

  }
  updateFilter(filter) {
    this.filter = filter;
    console.log(filter);
  }

}
