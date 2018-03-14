import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorService } from './services/author.service';
import { BlogService } from './services/blog.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [AuthorService, BlogService]
})
export class CoreModule { }
