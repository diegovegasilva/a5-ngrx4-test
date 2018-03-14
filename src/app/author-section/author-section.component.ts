import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthorService } from '../core/services/author.service';

@Component({
  selector: 'author-section',
  templateUrl: './author-section.component.html',
  styleUrls: ['./author-section.component.css']
})
export class AuthorSectionComponent implements OnInit {
  @Output() updateFilter = new EventEmitter();
  authors$

  constructor(private service: AuthorService) { }

  ngOnInit() {
    this.authors$ = this.service.loadAllAuthors();
  }


  onSelectAuthor(author: string) {
    this.updateFilter.emit(author);
    const filter = author === 'All' ? author : 'Other';
    //this.store.dispatch({ type: '', payload: { type: filter, value: author } });
  }

}
