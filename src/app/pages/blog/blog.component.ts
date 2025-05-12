import { NgFor, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { BlogCardComponent } from "../blog-card/blog-card.component";
import { BlogServiceService } from '../../service/blog-service.service';
import { ActivatedRoute } from '@angular/router';
import { Blog } from '../models/Blog';
import { CategoryService } from '../../service/category.service';
import { Category } from '../models/Category';

@Component({
  selector: 'app-blog',
  imports: [NgIf],
templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent{
 
  blogService=inject(BlogServiceService);
  route=inject(ActivatedRoute);
  categoryService=inject(CategoryService);
  categoryList:Category[]=[];
  blog!:Blog;
  ngOnInit(){
    let id=this.route.snapshot.params['id'];
    this.blogService.getBlogsById(id).subscribe({
      next: (data) => this.blog = data,
      error: (err) => console.error('Error loading blog:', err)
    });
    this.categoryService.getCategoryList().subscribe(result=>{
      this.categoryList=result;
    })
  }
  getCategoryName(){
   return this.categoryList.find(x=>x.id==this.blog?.categoryId)?.name 
  }

}
