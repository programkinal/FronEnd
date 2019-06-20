import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { JwtResponse } from '../models/jwt-response';
import { User } from '../models/user';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  authSubject = new BehaviorSubject(false);
  private token
  endpoint = 'http://localhost:3789/User';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  constructor(private http: HttpClient) { }

  private extractData(res: Response) {
    let body = res;
    return body || [ ] || { };
  }

  Register(save_user): Observable<any>{
    let params = JSON.stringify(save_user);
    return this.http.post(this.endpoint + '/Register', params, this.httpOptions).pipe(
      map(this.extractData)
    )
  }
  login(user): Observable<any>{
    let params = JSON.stringify(user);
    console.log(params);
    // this.token = localStorage.setItem("token", this.token);
    return this.http.post(this.endpoint + '/Login', params,this.httpOptions).pipe(
      map(this.extractData)
    )
  }
  logout(){
    this.token = '';
    localStorage.removeItem("ACCESS_TOKEN");
    localStorage.removeItem("EXPIRE_IN");
  }

  getToken():string{
    if(!this.token){
      this.token = localStorage.getItem("token");
    }
    return this.token;
  }
}
