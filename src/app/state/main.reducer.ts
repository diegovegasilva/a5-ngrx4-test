import * as fromBlogs from './reducers/blog.reducer';
import * as fromAuthors from './reducers/author.reducer';
import { ActionReducerMap, ActionReducer, createSelector, combineReducers, createFeatureSelector, MetaReducer } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';
import { environment } from '../../environments/environment';

export interface State {
  blogs: fromBlogs.State;
  authors: fromAuthors.State;
}


export const rootReducers: ActionReducerMap<State> = {
  blogs: fromBlogs.blogReducer,
  authors: fromAuthors.authorReducer
};

export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
  return function(state: State, action: any): State {
    console.log('state', state);
    console.log('action', action);

    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? [logger, storeFreeze]
  : [];

// extract state slices
export const getBlogState = (state: State) => state.blogs;
export const getAuthorState = (state: State) => state.authors;



// blog selector
export const getBlogs = createSelector(getBlogState, fromBlogs.getBlogs);
export const getAuthors = createSelector(getAuthorState, fromAuthors.getAuthors);

// author selector
export const getSelectedAuthor = createSelector(getAuthorState, fromAuthors.getSelectedAuthor);
