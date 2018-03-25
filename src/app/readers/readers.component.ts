import { Component, OnInit } from '@angular/core';
import { ReaderService } from '../core/services/reader.service';
import { Observable } from 'rxjs/Observable';
import { Reader } from '../shared/models/reader.model';

@Component({
  selector: 'app-readers',
  templateUrl: './readers.component.html',
  styleUrls: ['./readers.component.css']
})
export class ReadersComponent implements OnInit {
  readers$;

  constructor(private readersService: ReaderService) {}

  ngOnInit() {
    this.getReaders();
  }

  getReaders() {
    this.readers$ = this.readersService.loadReaders();
  }
}
