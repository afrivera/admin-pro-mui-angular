import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment.prod';
import { catchError, delay, map, Observable, of, tap } from 'rxjs';


import { User } from '../models/user.model';


const { base_url } = environment;

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  public user!: User;

  get token(){
    return localStorage.getItem('x-token') || '';
  }

  get role(): 'ADMIN_ROLE' | 'USER_ROLE'{
    return this.user.role!
  }

  get uid(){
    return this.user.uid || '';
  }

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
                map( (resp: any) => {
                  const { name, email, image, google, role, uid } = resp.body.user;
                  this.saveLS( resp.body.token, resp.body.menu);
                  this.user = new User( name, email, '', image, google, role, uid);
                  return true
                }),
                catchError( err => of( false ))
              ) 
  }

  createUser( formdata: any){
    return this._http.post(`${base_url}/users`, formdata )
              .pipe(
                tap(
                  (resp:any) => {
                    console.log(resp)
                    this.saveLS(resp.body.token, resp.body.menu)
                  }
                ),
                map(res => true),
                catchError(err => of( false ))
              )
  }

  getUsers(){
    return this._http.get(`${base_url}/users`, {headers: {'x-token': this.token}})
            .pipe(
              delay(500),
              map( (resp: any) => {
                const users = resp.body.users.map( (user: any) => new User(user.name, user.email, '', user.image, user.google, user.role, user.uid));
                return users;
              })
            )
  }

  destroyUser( id: string ){
    return this._http.delete(`${base_url}/users/${ id }`, { headers: { 'x-token': this.token }});
  }

  ValidToken(): Observable<boolean>{
    return this._http.get(`${base_url}/auth/renew`)
      .pipe(
        map( (resp: any) => {
          const { name, email, image, google, role, uid } = resp.body.user;
          this.user = new User( name, email, '', image, google, role, uid);
          this.saveLS( resp.body.token, resp.body.menu);
          return true;
        }),
        catchError( err => of( false ))
      )
  }
}
