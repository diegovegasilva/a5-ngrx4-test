import { Action } from '@ngrx/store';
import { Reader } from '../../shared/models/reader.model';

export const LOAD_READERS = '[READER] LOAD ALL';
export const STORE_READERS = '[READER] STORE_ALL';

export class LoadReaders implements Action {
  readonly type = LOAD_READERS;
  constructor() {}
}

export class StoreReaders implements Action {
  readonly type = STORE_READERS;
  constructor(public payload: Reader[]) {}
}

export type Actions = LoadReaders | StoreReaders;
