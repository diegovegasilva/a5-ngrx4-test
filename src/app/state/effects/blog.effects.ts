import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';

import { BlogService } from '../../core/services/blog.service';
import * as blogActions from '../../state/actions/blog.actions';
import { Blog } from '../../shared/models/blog.model';

@Injectable()
export class BlogEffects {
  constructor(private actions$: Actions, private blogService: BlogService) {}

  @Effect()
  loadBlogs$: Observable<Action> = this.actions$
    .ofType(blogActions.LOAD_BLOGS)
    .switchMap(() =>
      this.blogService
        .getBlogs()
        .map((data: Blog[]) => new blogActions.StoreBlogs(data))
    );

  @Effect()
  addBlog$: Observable<Action> = this.actions$
    .ofType<blogActions.LoadBlog>(blogActions.LOAD_BLOG)
    .map(action => action.payload)
    .mergeMap(blog =>
      this.blogService
        .addBlog(blog)
        .map((data: Blog) => new blogActions.StoreBlog(data))
    );
}
