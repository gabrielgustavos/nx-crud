import { Injectable, inject } from '@angular/core';
import { environment } from '../../config/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MercadosModel, ResponseModel } from '@nx-org/interfaces';

@Injectable({ providedIn: 'root' })
export class MercadosService {
  constructor() {}
  apiBase = `${environment.apiBase}mercados`;
  private http = inject(HttpClient);

  public getClient(): Observable<ResponseModel<MercadosModel[]>> {
    return this.http.get<ResponseModel<MercadosModel[]>>(`${this.apiBase}`);
  }

  getDelivery(id: any): Observable<ResponseModel<MercadosModel[]>> {
    return this.http.get<ResponseModel<MercadosModel[]>>(
      `${this.apiBase}/${id}`
    );
  }
}
