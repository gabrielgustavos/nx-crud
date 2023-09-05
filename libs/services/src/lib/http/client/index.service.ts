import { Injectable, inject } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { environment } from '../../config/environment.prod';
import { ClientModel, ResponseModel } from '@nx-org/interfaces';
import { Observable } from 'rxjs';

@Injectable()
export class ClientService {
  apiBase = `${environment.apiBase}clients`
  private http = inject(HttpClient)

  public getClient(): Observable<ResponseModel<ClientModel[]>> {
    return this.http.get<ResponseModel<ClientModel[]>>(`${this.apiBase}`);
  }

  public postClient(model: ClientModel): Observable<ResponseModel<ClientModel[]>> {
    return this.http.post<ResponseModel<ClientModel[]>>(`${this.apiBase}`, model);
  }

  public putClient(id: any, model: ClientModel): Observable<ResponseModel<ClientModel[]>> {
    return this.http.put<ResponseModel<ClientModel[]>>(`${this.apiBase}/${id}`, model);
  }
}
