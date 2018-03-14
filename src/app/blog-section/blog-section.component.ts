import { Component, OnInit, Input, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import {BlogService} from '../core/services/blog.service';

@Component({
  selector: 'blog-section',
  templateUrl: './blog-section.component.html',
  styleUrls: ['./blog-section.component.css']
})
export class BlogSectionComponent implements OnInit {
  @Input() filter = 'All';

  blogs$

  constructor(private blogService: BlogService ) { }

  ngOnInit() {
    this.blogs$ = this.blogService.loadBlogs();
  }



}
