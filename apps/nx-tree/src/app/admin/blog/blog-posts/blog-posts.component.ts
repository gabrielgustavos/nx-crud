import { Component, OnInit, inject } from '@angular/core';
import { ModalRemoverComponent, ModalService } from '@nx-org/components';
import { PostModel } from '@nx-org/interfaces';
import { BlogService } from '@nx-org/services';
import { CadEditPostComponent } from './cad-edit-post/cad-edit-post.component';
import { filter, take } from 'rxjs';

@Component({
  selector: 'nx-org-blog-posts',
  templateUrl: './blog-posts.component.html',
  styleUrls: ['./blog-posts.component.scss'],
})
export class BlogPostsComponent implements OnInit {
  private blogService = inject(BlogService);
  private modalService = inject(ModalService);

  dados: PostModel[] = []; // Crie uma variável para armazenar os dados

  constructor() {}

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.blogService.getBlogPost().subscribe((res: any) => {
      this.dados = res; // Atribua os dados à variável 'dados'
    });
  }

  removerPost(id: any) {
    const modal = this.modalService.open(ModalRemoverComponent, {
      width: '31.21rem',
      clickOutside: true,
      data: {
        titulo: 'Excluir Post',
        mensagem: 'Tem certeza que deseja excluir este post?',
      },
    });

    modal
      .afterClosed()
      .pipe(
        take(1),
        filter((data) => data != false)
      )
      .subscribe((data) => {
        if (data) {
          this.blogService
            .deleteBlogPost(id)
            .pipe(take(1))
            .subscribe({
              next: () => this.getPosts(),
            });
        }
      });
  }

  cadastrarCliente(data: any | null) {
    const modal = this.modalService.open(CadEditPostComponent, {
      width: '50rem',
      clickOutside: true,
      data,
    });

    modal
      .afterClosed()
      .pipe(
        take(1),
        filter((data) => data != false)
      )
      .subscribe((data) => {
        if (data) this.getPosts();
      });
  }
}
