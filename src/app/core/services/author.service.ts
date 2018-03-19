import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { ADD_AUTHOR } from '../../state/actions/author.actions';

@Injectable()
export class AuthorService {
  private _baseUrl = 'http://localhost:3000/';

  constructor(private http: HttpClient, private store: Store<any>) {}

  loadAllAuthors() {
    return this.http.get(this._baseUrl + 'authors').subscribe(res => {
      this.store.dispatch({ type: ADD_AUTHOR, payload: res });
    });
  }
}
