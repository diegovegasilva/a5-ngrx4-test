import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

@Injectable()
export class AuthorService {
  private _baseUrl = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  loadAllAuthors() {
    return this.http.get(this._baseUrl + 'authors');
  }
}
