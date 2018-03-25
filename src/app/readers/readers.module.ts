import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReadersRoutingModule } from './readers-routing.module';
import { ReadersComponent } from './readers.component';
import { ReaderListComponent } from './reader-list/reader-list.component';

@NgModule({
  imports: [
    CommonModule,
    ReadersRoutingModule
  ],
  declarations: [ReadersComponent, ReaderListComponent],
})
export class ReadersModule { }
