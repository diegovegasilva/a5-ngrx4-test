import { Action } from '@ngrx/store';
import { Author } from '../../shared/models/author.model';

export const LOAD_AUTHOR = '[AUTHOR] LOAD';

export class LoadAuthors implements Action {
  readonly type = LOAD_AUTHOR;
  constructor(public payload: Author) {}
}

export type Actions = LoadAuthors;
