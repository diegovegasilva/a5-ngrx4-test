import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { rootReducers, metaReducers } from './state/main.reducer';
import { blogReducer } from './state/reducers/blog.reducer';
import { authorReducer } from './state/reducers/author.reducer';

import { AppRoutingModule } from './app-routing.module';

import { CoreModule } from './core/core.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AuthorSectionComponent } from './author-section/author-section.component';
import { BlogSectionComponent } from './blog-section/blog-section.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { AddBlogComponent } from './add-blog/add-blog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AuthorSectionComponent,
    BlogSectionComponent,
    BlogListComponent,
    AddBlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CoreModule,
    StoreModule.forRoot(rootReducers, {metaReducers}),
    StoreDevtoolsModule.instrument({ maxAge: 25 })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
