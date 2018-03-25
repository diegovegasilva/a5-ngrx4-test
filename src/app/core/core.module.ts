import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorService } from './services/author.service';
import { BlogService } from './services/blog.service';
import { ReaderService } from './services/reader.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [AuthorService, BlogService, ReaderService]
})
export class CoreModule { }
