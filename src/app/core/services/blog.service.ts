import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';

import { Store } from '@ngrx/store';
import { ADD_BLOG, DELETE_BLOG } from '../../state/actions/blog.actions';
import * as _ from 'lodash';

@Injectable()
export class BlogService {
  private _baseUrl = 'http://localhost:3000/';

  constructor(private http: HttpClient, private store: Store<any>) {}

  loadBlogs() {
    return this.http.get(this._baseUrl + 'blogs').subscribe(res => {
      this.store.dispatch({ type: ADD_BLOG, payload: res });
    });
  }

  loadFilteredBlog(filter): any {
    return this.store.select('blog').map(blogs => {
      blogs = filter === 'All' ? blogs : _.filter(blogs, blog => blog.author === filter);
      return blogs;
    });
  }

  addBlog(blog) {
    return this.http.post<any>(this._baseUrl + 'blogs', blog).subscribe(res => {
      this.store.dispatch({ type: ADD_BLOG, payload: res });
    });
  }

  deleteBlog(blog) {
    return this.http.delete<any>(this._baseUrl + 'blogs/' + blog.id).subscribe(res => {
      this.store.dispatch({ type: DELETE_BLOG, payload:  blog.id });
    });
  }
}
