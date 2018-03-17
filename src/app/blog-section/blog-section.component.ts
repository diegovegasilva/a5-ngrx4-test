import {
  Component,
  OnInit,
  Input,
  SimpleChanges,
  ChangeDetectionStrategy,
  OnChanges
} from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { filter } from 'rxjs/operators';

import { BlogService } from '../core/services/blog.service';
import { Blog } from '../shared/models/blog.model';

import { Store } from '@ngrx/store';
import { ADD_BLOG, DELETE_BLOG } from '../state/actions/blog.actions';

@Component({
  selector: 'blog-section',
  templateUrl: './blog-section.component.html',
  styleUrls: ['./blog-section.component.css']
})
export class BlogSectionComponent implements OnInit, OnChanges {
  @Input() filter = 'All';

  blogs$;

  constructor(private blogService: BlogService, private store: Store<any>) {}

  ngOnInit() {
    this.blogService.loadBlogs();
    this.blogs$ = this.store.select('blog');
  }

  ngOnChanges() {
    // this.getBlogs();
  }

  filterBlogs() {
    this.blogs$ = this.blogService.loadFilteredBlog(this.filter);
  }

  addBlog(blog: Blog) {
    blog.author = this.filter;
    this.blogService.addBlog(blog);
  }

  deleteBlog(blog: Blog) {
    this.blogService.deleteBlog(blog);
  }

  showStore() {
    this.store.select('blog').subscribe(res => {
      console.log('store', res);
    });
  }
}
