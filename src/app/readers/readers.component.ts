import { Component, OnInit } from '@angular/core';
import { ReaderService } from '../core/services/reader.service';
import { Observable } from 'rxjs/Observable';

import { Store } from '@ngrx/store';
import * as readerSelector from './state/';
import { Reader } from '../shared/models/reader.model';

@Component({
  selector: 'app-readers',
  templateUrl: './readers.component.html',
  styleUrls: ['./readers.component.css']
})
export class ReadersComponent implements OnInit {
  readers$;

  constructor(private readersService: ReaderService, private store: Store<any>) {}

  ngOnInit() {
    this.readersService.loadReaders();
    this.readers$ = this.store.select(readerSelector.selectReaders);
  }
}
