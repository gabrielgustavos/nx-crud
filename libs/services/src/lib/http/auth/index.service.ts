import { Injectable, inject } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { environment } from '../../config/environment.prod';
import { LoginModel, ResponseModel } from '@nx-org/interfaces';
import { Observable, map } from 'rxjs';
@Injectable()
export class AuthService {
  apiBase = `${environment.apiBase}auth`
  private apiUrl = 'http://localhost:3000/auth';
  private http = inject(HttpClient)


  public postLogin(model: LoginModel): Observable<ResponseModel<LoginModel[]>> {
    return this.http.post<ResponseModel<LoginModel[]>>(`${this.apiBase}`, model);
  }

  public checkCredentials(email: string, senha: string): Observable<boolean> {
    return this.http.get<any[]>(this.apiUrl).pipe(map((data: any) => {
      const matchingUser = data.find((user: any) => user.email === email && user.senha === senha);
      return !!matchingUser;
    }));
  }


}
