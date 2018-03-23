import * as fromBlogs from './reducers/blog.reducer';
import { createSelector } from '@ngrx/store';

export interface State {
  blogs: fromBlogs.State;
  authors: any;
}

// extract state slices
export const getBlogState = (state: State) => state.blogs;

// blog selector
export const getBlogs = createSelector(getBlogState, fromBlogs.getBlogs);
