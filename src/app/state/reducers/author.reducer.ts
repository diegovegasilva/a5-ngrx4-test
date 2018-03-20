import * as fromActions from '../actions/author.actions';
import * as _ from 'lodash';

export const authorReducer = (
  state: any = [],
  action: fromActions.Actions
) => {
  switch (action.type) {
    case fromActions.ADD_AUTHOR:
      return state.concat(action.payload);
    default:
      return state;
  }
};
