import { Action } from '@ngrx/store';
import { Reader } from '../../shared/models/reader.model';

export const LOAD_READER = '[READER] LOAD';

export class LoadReaders implements Action {
  readonly type = LOAD_READER;
  constructor(public payload: Reader) {}
}

export type Actions = LoadReaders;
