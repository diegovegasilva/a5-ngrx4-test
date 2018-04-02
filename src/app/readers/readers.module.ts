import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { readerReducer } from '../state/reducers/reader.reducer';
import { ReaderEffects } from '../state/effects/reader.effects';

import { ReadersRoutingModule } from './readers-routing.module';
import { ReadersComponent } from './readers.component';
import { ReaderListComponent } from './reader-list/reader-list.component';

@NgModule({
  imports: [
    CommonModule,
    ReadersRoutingModule,
    StoreModule.forFeature('readers', readerReducer),
    EffectsModule.forFeature([ReaderEffects]),
  ],
  declarations: [ReadersComponent, ReaderListComponent],
})
export class ReadersModule { }
