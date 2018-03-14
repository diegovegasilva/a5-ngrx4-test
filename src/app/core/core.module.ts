import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorService } from './services/author.service'

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [AuthorService]
})
export class CoreModule { }
