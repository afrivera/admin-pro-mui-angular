import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment.prod';
import { catchError, of, tap } from 'rxjs';


const { base_url } = environment;

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  public user!: any;

  constructor(
    private _http: HttpClient
  ) { }

  saveLS( token: string, menu:any ){
    localStorage.setItem('x-token', token);
    localStorage.setItem('menu', JSON.stringify(menu));
  }
  
  login( data: { email: string, password: string }){
    return this._http.post(`${base_url}/auth/login`, data )
              .pipe(
                tap( (resp: any) => {
                  this.saveLS( resp.body.token, resp.body.menu);
                  return true
                }),
                catchError( err => of( false ))
              ) 
  }
}
