import { Component, OnInit, inject } from '@angular/core';
import { BlogService } from '@nx-org/services';

@Component({
  selector: 'nx-org-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  private blogService = inject(BlogService);
  imagem: any;

  constructor() {}

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.blogService.getBlogPost().subscribe((res: any) => {
      const dados = res;
      this.imagem = dados[0].avatar;
    });
  }
}
