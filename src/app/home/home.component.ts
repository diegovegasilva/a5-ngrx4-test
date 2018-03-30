import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { AuthorService } from '../core/services/author.service';
import * as rootSelector from '../state/main.reducer';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnChanges, OnDestroy {
  filter: object;
  filter$;

  constructor(private authorService: AuthorService, private store: Store<any>) {}

  ngOnInit() {
    this.filter$ = this.store.select(rootSelector.getSelectedAuthor).subscribe(res =>{
      console.log('filter$', res);
      if (!res) {
        this.authorService.selectAuthor({name : 'All'});
      } else {
        this.filter = res;
      }
    });
  }

  ngOnChanges() {
    console.log('homeComponent Onchanges');
  }

  updateFilter(filter) {
    this.filter = filter;
    this.authorService.selectAuthor({name : filter});
  }

  ngOnDestroy() {
    this.filter$.unsubscribe();
  }
}
