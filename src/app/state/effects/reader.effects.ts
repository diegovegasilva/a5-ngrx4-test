import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';

import { ReaderService } from '../../core/services/reader.service';
import * as readerActions from '../../state/actions/reader.actions';
import { Reader } from '../../shared/models/reader.model';

@Injectable()
export class ReaderEffects {
  constructor(private actions$: Actions, private readerService: ReaderService) {}

  @Effect()
  loadBlogs$: Observable<Action> = this.actions$
    .ofType(readerActions.LOAD_READERS)
    .switchMap(() =>
      this.readerService
        .getReaders()
        .map((data: Reader[]) => new readerActions.StoreReaders(data))
    );
}
