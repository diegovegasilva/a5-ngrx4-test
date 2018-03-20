import { Action } from '@ngrx/store';
import { Author } from '../../shared/models/author.model';

export const ADD_AUTHOR = '[AUTHOR] ADD';

export class AddAuthor implements Action {
  readonly type = ADD_AUTHOR;
  constructor(public payload: Author) {}
}

export type Actions = AddAuthor;
