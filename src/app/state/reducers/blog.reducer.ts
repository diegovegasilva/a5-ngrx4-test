import { ADD_BLOG, DELETE_BLOG } from '../actions/blog.actions';
import * as _ from 'lodash';

export const blogReducer = (state: any = [], action) => {
  switch (action.type) {
    case ADD_BLOG:
      return state.concat(action.payload);
    case DELETE_BLOG:
      const newState = _.filter(state, st => st.id !== action.payload);
      return newState;
    default:
      return state;
  }
};
