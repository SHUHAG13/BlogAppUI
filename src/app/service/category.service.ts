import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Category } from './../pages/models/Category';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor() { }
  http=inject(HttpClient);
  getCategoryList(){
    return this.http.get<Category[]>(environment.apiUrl+'/api/Category');
  }

}
