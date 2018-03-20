import { Action } from '@ngrx/store';
import { Blog } from '../../shared/models/blog.model';

export const LOAD_BLOGS = '[BLOG] LOAD_ALL';
export const ADD_BLOG = '[BLOG] ADD';
export const DELETE_BLOG = '[BLOG] DELETE';

export class LoadBlogs implements Action {
  readonly type = LOAD_BLOGS;
  constructor(public payload: Blog[]) {}
}

export class AddBlog implements Action {
  readonly type = ADD_BLOG;
  constructor(public payload: Blog) {}
}

export class DeleteBlog implements Action {
  readonly type = DELETE_BLOG;
  constructor(public payload: number) {}
}


export type Actions = LoadBlogs | AddBlog | DeleteBlog;
