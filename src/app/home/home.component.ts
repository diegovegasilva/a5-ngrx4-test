import { Component, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnChanges {
  filter = 'All';

  constructor() {}

  ngOnInit() {}

  ngOnChanges() {
    console.log('homeComponent Onchanges');
  }

  updateFilter(filter) {
    this.filter = filter;
  }
}
