import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ApiClass } from "src/app/data/shema/Apiclass";
import { Apibak } from "src/app/Shared/routes/routes.back";


@Injectable({
  providedIn: 'root'
})
export class LoginService  extends ApiClass{


postUserLogin(form: any): Observable<any> {
  return this.http.post<any>('http://localhost/'+`${Apibak.apiLogin}`, form);
}
GetCuent(): Observable<any>{
  const response = {error: false, msg: '', data: null};

  return this.http.get('http://localhost/api/Cuenta')

}
}
