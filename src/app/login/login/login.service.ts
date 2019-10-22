import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import { Observable, pipe } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  /*constructor(private http: Http) { }

  private headersREST(): Headers {
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    return myHeaders;
  }
  public signin(correo_electronico, contrasena): Observable<any> {
   const url='http://localhost:3000/api/signin'

    return this.http.post(url, {correo_electronico, contrasena},
     { headers: this.headersREST() }).pipe(
      map(response => {        
        return response.json();
      }), pipe(catchError(this.handleError)))
  }
  private handleError(error: Response) {
    const setError = (error['_body']) ? JSON.parse(error['_body']) : error.statusText;
    const json = {
      Errors: setError,
      Resultado: [],
      EsExitoso: false,
      Status: error.status
    };
    return Observable.throw(json);
  }*/
}
