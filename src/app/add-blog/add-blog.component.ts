import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Blog } from '../shared/models/blog.model';

@Component({
  selector: 'add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent implements OnInit {
  @Output() addBlogEvent = new EventEmitter();
  @Input() filter;
  blog: Blog = {
    id: undefined,
    title: undefined,
    author: undefined
  };

  constructor() {}

  ngOnInit() {}

  addBlog() {
    this.addBlogEvent.emit(this.blog);
  }
}
