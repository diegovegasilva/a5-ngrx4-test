import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromReaders from '../../state/reducers/reader.reducer';

export const selectFeatureReaders = createFeatureSelector<fromReaders.State>('readers');

export const selectReaders = createSelector(selectFeatureReaders, fromReaders.getReaders);
