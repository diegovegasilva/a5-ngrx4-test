import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { CoreModule } from './core/core.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AuthorSectionComponent } from './author-section/author-section.component';
import { BlogSectionComponent } from './blog-section/blog-section.component';
import { BlogListComponent } from './blog-list/blog-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AuthorSectionComponent,
    BlogSectionComponent,
    BlogListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
