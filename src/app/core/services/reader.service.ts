import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Store } from '@ngrx/store';
import { Reader } from '../../shared/models/reader.model';

@Injectable()
export class ReaderService {
  private _baseUrl = 'http://localhost:3000/';

  constructor(private http: HttpClient, private store: Store<any>) { }

  getReaders() {
    return this.http.get(this._baseUrl + 'readers');
  }

  loadReaders() {
    return this.http.get(this._baseUrl + 'readers');
  }

}
