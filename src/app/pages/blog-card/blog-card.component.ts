import { Component, inject, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { Blog } from '../models/Blog';
import { CategoryService } from '../../service/category.service';
import { Category } from '../models/Category';
@Component({
  selector: 'app-blog-card',
  imports: [MatCardModule,MatButtonModule,RouterLink],
  templateUrl: './blog-card.component.html',
  styleUrl: './blog-card.component.css'
})
export class BlogCardComponent {
 @Input() blog!:Blog;
 categoruService=inject(CategoryService);
 categoryList:Category[]=[];
 ngOnInit(){
  this.categoruService.getCategoryList().subscribe(result=>{
    this.categoryList=result;
  })
 }
 getCategoryName(){
  return this.categoryList.find(x=>x.id==this.blog?.categoryId)?.name
 }

}
