import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-reader-list',
  templateUrl: './reader-list.component.html',
  styleUrls: ['./reader-list.component.css']
})
export class ReaderListComponent implements OnInit {
  @Input() readers;

  constructor() { }

  ngOnInit() {
  }

}
