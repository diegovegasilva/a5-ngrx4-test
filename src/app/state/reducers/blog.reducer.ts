import * as blogActions from '../actions/blog.actions';
import * as _ from 'lodash';

export const blogReducer = (state: any = [], action: blogActions.Actions) => {
  switch (action.type) {
    case blogActions.LOAD_BLOGS:
      return state.concat(action.payload);
    case blogActions.ADD_BLOG:
      return state.concat(action.payload);
    case blogActions.DELETE_BLOG:
      const newState = _.filter(state, st => st.id !== action.payload);
      return newState;
    default:
      return state;
  }
};
