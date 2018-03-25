import * as fromActions from '../actions/reader.actions';
import * as _ from 'lodash';

import { Reader } from '../../shared/models/reader.model';

export interface State {
  readers: Reader[];
}

const initialState: State = {
  readers: []
};


export const readerReducer = (state: State = initialState, action: fromActions.Actions): State => {
  switch (action.type) {
    case fromActions.LOAD_READER:
      return Object.assign({}, state, {
        readers: action.payload
      });
    default:
      return state;
  }
};

// slices of state
export const getReaders = (state: State) => state.readers;
