import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BlogRouting } from './blog.routing';
import { BlogComponent } from './blog.component';
import { BlogPostsComponent } from './blog-posts/blog-posts.component';
import { BlogService } from '@nx-org/services';
import { ButtonModule, InputModule, ModalService } from '@nx-org/components';
import { MatCardModule } from '@angular/material/card';
import { CadEditPostComponent } from './blog-posts/cad-edit-post/cad-edit-post.component';
import { QuillModule } from 'ngx-quill';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    QuillModule.forRoot(),
    FormsModule,
    MatCardModule,
    ButtonModule,
    InputModule,
    BlogRouting,
    ReactiveFormsModule,
  ],
  exports: [],
  declarations: [BlogComponent, BlogPostsComponent, CadEditPostComponent],
  providers: [BlogService, ModalService],
})
export class BlogModule {}
