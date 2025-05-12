import { Component, inject } from '@angular/core';

import { Blog } from '../models/Blog';
import { BlogServiceService } from '../../service/blog-service.service';
import { NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { BlogComponent } from "../blog/blog.component";
import { BlogCardComponent } from '../blog-card/blog-card.component';
@Component({
  selector: 'app-home',
  imports: [NgFor,BlogCardComponent,NgIf],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  blogTitle:string="Create, Share, and Scale with .NET Web API Blogs";
  blogDescription:string="Welcome to the world of modern blogging, powered by the robust and versatile .NET Web API. Our platform is designed to offer a seamless experience for both developers and content creators, providing a flexible and scalable solution to build, manage, and publish blog posts with ease. Whether you're a beginner starting your blogging journey or a professional developer looking to create a dynamic content management system, our .NET-based solution offers the tools you need to bring your ideas to life.";
  featuredBlogs!: Blog[];
  blogService = inject(BlogServiceService);
  ngOnInit() {
    this.blogService.getFeaturedBlogs().subscribe(
      (data) => {
        this.featuredBlogs = data;
        console.log(this.featuredBlogs);
      },
      (error) => {
        console.error('Error fetching featured blogs', error);
      }
    );
  }
}
