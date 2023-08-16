import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { environment } from '../../config/environment.prod';
import { LoginModel, OkModel } from '@nx-org/interfaces';
import { Observable } from 'rxjs';
@Injectable()
export class AuthService {
  private interval: any;
  apiBase?: string;
  private isAuthenticated = false; // Indica se o usuário está autenticado

  constructor(private http: HttpClient) {
    this.apiBase = `${environment.apiBase}auth`
  }

  public login(model: LoginModel): Observable<OkModel<any>> {
    return this.http.post<OkModel<any>>(`${this.apiBase}`, model);
  }


}
