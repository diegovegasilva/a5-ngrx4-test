import { Component, OnInit, Input, SimpleChanges, ChangeDetectionStrategy, OnChanges } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { BlogService } from '../core/services/blog.service';
import { Blog } from '../shared/models/blog.model';

@Component({
  selector: 'blog-section',
  templateUrl: './blog-section.component.html',
  styleUrls: ['./blog-section.component.css']
})
export class BlogSectionComponent implements OnInit, OnChanges {
  @Input() filter = 'All';

  blogs$

  constructor(private blogService: BlogService) { }

  ngOnInit() {

  }

  ngOnChanges() {
    this.blogs$ = this.blogService.loadFilteredBlog(this.filter);
  }

  addBlog(blog: Blog) {
    blog.author = this.filter;
    this.blogService.addBlog(blog);
  }

  deleteBlog(blog: Blog) {
    this.blogService.deleteBlog(blog);
  }




}
