import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { environment } from '../../config/environment.prod';
import { LoginModel, OkModel } from '@nx-org/interfaces';
import { Observable, map } from 'rxjs';
@Injectable()
export class AuthService {
  apiBase: string;
  private apiUrl = 'http://localhost:3000/auth';


  constructor(private http: HttpClient) {
    this.apiBase = `${environment.apiBase}auth`
  }

  public postLogin(model: LoginModel): Observable<OkModel<any>> {
    return this.http.post<OkModel<any>>(`${this.apiBase}`, model);
  }

  public checkCredentials(email: string, senha: string): Observable<boolean> {
    return this.http.get<any[]>(this.apiUrl).pipe(map((data: any) => {
      const matchingUser = data.find((user: any) => user.email === email && user.senha === senha);
      return !!matchingUser;
    }));
  }


}
