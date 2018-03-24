import * as fromBlogs from './reducers/blog.reducer';
import * as fromAuthors from './reducers/author.reducer';
import { createSelector } from '@ngrx/store';

export interface State {
  blogs: fromBlogs.State;
  authors: fromAuthors.State;
}

// extract state slices
export const getBlogState = (state: State) => state.blogs;
export const getAuthorState = (state: State) => state.authors;

// blog selector
export const getBlogs = createSelector(getBlogState, fromBlogs.getBlogs);
export const getAuthors = createSelector(getAuthorState, fromAuthors.getAuthors);
