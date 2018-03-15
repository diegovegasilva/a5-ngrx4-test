import { ADD_BLOG, DELETE_BLOG } from '../actions/blog.actions';

export const blogReducer = (state: any = [], action) => {
  switch (action.type) {
    case ADD_BLOG:
      return [...state, action.payload];
    default:
      return state;
  }
};
