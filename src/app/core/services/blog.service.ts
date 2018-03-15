import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/filter'


@Injectable()
export class BlogService {

  private _baseUrl = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  loadBlogs() {
    return this.http.get(this._baseUrl + 'blogs');
  }

  loadFilteredBlog(filter): any {
    return this.http.get<any>(this._baseUrl + 'blogs').map(
      (blogs) => {
        var filteredBlogs = filter === 'All' ? blogs : blogs.filter(blog => blog.author === filter);
        return filteredBlogs;
      });
  }

  addBlog(blog){
    return this.http.post<any>(this._baseUrl + 'blogs', blog);
  }

  deleteBlog(blog){
    return this.http.delete<any>(this._baseUrl + 'blogs/'+blog.id);
  }

}
