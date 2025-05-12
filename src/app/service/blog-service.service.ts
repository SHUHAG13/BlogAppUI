import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Blog } from '../pages/models/Blog';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class BlogServiceService {
  http=inject(HttpClient);
  constructor() { }

  getFeaturedBlogs(){
    return this.http.get<Blog[]>(environment.apiUrl+'/api/Blog/featured');
  }
  getAllBlogs(){
    return this.http.get<Blog[]>(environment.apiUrl+'/api/Blog');
  }
  getBlogsById(id:number){
    return this.http.get<Blog>(environment.apiUrl+'/api/Blog/'+id);
  }
}
