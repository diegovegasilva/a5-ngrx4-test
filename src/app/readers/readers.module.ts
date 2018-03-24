import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReadersRoutingModule } from './readers-routing.module';
import { ReadersComponent } from './readers.component';

@NgModule({
  imports: [
    CommonModule,
    ReadersRoutingModule
  ],
  declarations: [ReadersComponent],
})
export class ReadersModule { }
