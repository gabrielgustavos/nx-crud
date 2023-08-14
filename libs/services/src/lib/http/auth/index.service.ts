import { Router } from '@angular/router';
import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { environment } from '../../config/environment.prod';
import { LoginModel, OkModel } from '@nx-org/interfaces';
import { Observable } from 'rxjs';
@Injectable()
export class AuthService {
  private interval: any;
  apiBase?: string;

  constructor(private http: HttpClient, private router: Router) {
    this.apiBase = `${environment.apiBase}/auth`
  }

  public login(model: LoginModel): Observable<OkModel<any>> {
    return this.http.post<OkModel<any>>(`${this.apiBase}/auth`, model);
  }
}
