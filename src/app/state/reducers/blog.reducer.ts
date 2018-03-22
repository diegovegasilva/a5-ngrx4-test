import { Blog } from '../../shared/models/blog.model';
import * as blogActions from '../actions/blog.actions';
import * as _ from 'lodash';

export interface State {
  blogs: Blog[];
}

const initialState: State = {
  blogs: []
};

export const blogReducer = (state = initialState, action: blogActions.Actions) => {
  switch (action.type) {
    case blogActions.LOAD_BLOGS:
        return Object.assign({}, state, {
          blogs: action.payload
        });
    case blogActions.ADD_BLOG:
        return Object.assign({}, state, {
          blogs: [...state.blogs, action.payload]
        });
    case blogActions.DELETE_BLOG:
      const newState = _.filter(state, st => st.id !== action.payload);
      return newState;
    default:
      return state;
  }
};

// slices of state
export const getBlogs = (state: State) => state.blogs;
