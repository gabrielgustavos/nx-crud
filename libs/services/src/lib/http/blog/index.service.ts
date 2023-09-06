import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { PostModel, ResponseModel } from '@nx-org/interfaces';
import { Observable } from 'rxjs';
import { environment } from '../../config/environment.prod';

@Injectable()
export class BlogService {
  apiBase = `${environment.apiBase}blog`;
  private http = inject(HttpClient);

  public getBlogPost(): Observable<ResponseModel<PostModel[]>> {
    return this.http.get<ResponseModel<PostModel[]>>(`${this.apiBase}`);
  }

  public postBlogPost(
    model: PostModel
  ): Observable<ResponseModel<PostModel[]>> {
    return this.http.post<ResponseModel<PostModel[]>>(`${this.apiBase}`, model);
  }

  public putBlogPost(
    id: any,
    model: PostModel
  ): Observable<ResponseModel<PostModel[]>> {
    return this.http.put<ResponseModel<PostModel[]>>(
      `${this.apiBase}/${id}`,
      model
    );
  }

  public deleteBlogPost(id: any): Observable<ResponseModel<PostModel[]>> {
    return this.http.delete<ResponseModel<PostModel[]>>(
      `${this.apiBase}/${id}`
    );
  }
}
