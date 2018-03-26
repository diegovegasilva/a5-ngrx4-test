import * as fromBlogs from './reducers/blog.reducer';
import * as fromAuthors from './reducers/author.reducer';
import { ActionReducerMap, ActionReducer, createSelector, combineReducers, createFeatureSelector } from '@ngrx/store';

export interface State {
  blogs: fromBlogs.State;
  authors: fromAuthors.State;
}


export const rootReducers: ActionReducerMap<State> = {
  blogs: fromBlogs.blogReducer,
  authors: fromAuthors.authorReducer
};

// const productionReducer: ActionReducer<State> = combineReducers(rootReducers);

/* export function reducer(state: any, action: any) {
  return productionReducer(state, action);
} */

// extract state slices
export const getBlogState = (state: State) => state.blogs;
export const getAuthorState = (state: State) => state.authors;



// blog selector
export const getBlogs = createSelector(getBlogState, fromBlogs.getBlogs);
export const getAuthors = createSelector(getAuthorState,fromAuthors.getAuthors);
