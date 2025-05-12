import { NgFor } from '@angular/common';
import { Component, inject, Inject } from '@angular/core';
import { BlogCardComponent } from '../blog-card/blog-card.component';
import { BlogServiceService } from '../../service/blog-service.service';

@Component({
  selector: 'app-blogs',
  imports: [NgFor,BlogCardComponent],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.css'
})
export class BlogsComponent {
  AllBlogs:any[]=[];
  blogService=inject(BlogServiceService);
  ngOnInit(){
    this.blogService.getAllBlogs().subscribe((data:any)=>{
        this.AllBlogs=data;
        console.log(this.AllBlogs);
    })
  }
}
