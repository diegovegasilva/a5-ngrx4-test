import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class BlogService {

  private _baseUrl = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  loadBlogs() {
    return this.http.get(this._baseUrl + 'blogs');
  }

}
