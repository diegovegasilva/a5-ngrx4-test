import * as fromActions from '../actions/author.actions';
import * as _ from 'lodash';

import { Author } from '../../shared/models/author.model';

export interface State {
  authors: Author[];
  selected: Author;
}

const initialState: State = {
  authors: [],
  selected: undefined
};


export const authorReducer = (state: State = initialState, action: fromActions.Actions): State => {
  switch (action.type) {
    case fromActions.LOAD_AUTHOR:
      return Object.assign({}, state, {
        authors: action.payload
      });
    case fromActions.SELECT_AUTHOR:
      return Object.assign({}, state, {
        selected: action.payload
      });
    default:
      return state;
  }
};

// slices of state
export const getAuthors = (state: State) => state.authors;
export const getSelectedAuthor = (state: State) => state.selected;
