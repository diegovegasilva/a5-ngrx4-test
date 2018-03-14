import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {

  @Input() blogs;
  @Output() deleteBlogEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  deleteBlog(blog) {
    this.deleteBlogEvent.emit(blog);
  }

}
