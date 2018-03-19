import { ADD_AUTHOR} from '../actions/author.actions';
import * as _ from 'lodash';

export const authorReducer = (state: any = [], action) => {
  switch (action.type) {
    case ADD_AUTHOR:
      return state.concat(action.payload);
    default:
      return state;
  }
};