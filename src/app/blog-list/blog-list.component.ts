import {
  Component,
  OnInit,
  Input,
  OnChanges,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit, OnChanges {
  @Input() blogs;
  @Output() deleteBlogEvent = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  ngOnChanges() {
    console.log('blog list OnChanges');
  }

  deleteBlog(blog) {
    this.deleteBlogEvent.emit(blog);
  }
}
