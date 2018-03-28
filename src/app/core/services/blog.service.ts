import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';

import { Store } from '@ngrx/store';
import * as rootSelector from '../../state/main.reducer';
import * as blogActions from '../../state/actions/blog.actions';
import * as _ from 'lodash';

import { Blog } from '../../shared/models/blog.model';

@Injectable()
export class BlogService {
  private _baseUrl = 'http://localhost:3000/';

  constructor(private http: HttpClient, private store: Store<any>) {}

  loadBlogs() {
    this.store.dispatch(new blogActions.LoadBlogs());
  }

  getBlogs() {
    return this.http.get(this._baseUrl + 'blogs');
  }

  loadFilteredBlog(filter): Observable<Blog[]> {
    return this.store.select(rootSelector.getBlogs).map(blogs =>
      filter === 'All' ? blogs : blogs.filter(blog => blog.author === filter)
    );
  }

  addBlog(blog) {
    return this.http
      .post<any>(this._baseUrl + 'blogs', blog)
      .subscribe((res: Blog) => {
        this.store.dispatch(new blogActions.AddBlog(res));
      });
  }

  deleteBlog(blog) {
    return this.http
      .delete<any>(this._baseUrl + 'blogs/' + blog.id)
      .subscribe(res => {
        this.store.dispatch(new blogActions.DeleteBlog(blog.id));
      });
  }
}
