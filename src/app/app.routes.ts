import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ManageBlogsComponent } from './components/admin/manage-blogs/manage-blogs.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'home',component:HomeComponent},
    {path:'about',component:AboutComponent},
    {path:'blogs',component:BlogsComponent},
    {path:'blog/:id',component:BlogComponent},
    {path:'admin/blogs',component:ManageBlogsComponent},
    
];
