import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {  UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private token: string;
  endpoint = 'http://localhost:3789/EducativeAdministracion';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'authorization': localStorage.getItem("token")
      
    })
  };
  constructor(private http: HttpClient, private rest: UserService) { 
    console.log(localStorage.getItem("token"))
  }

  private extractData(res: Response) {
    let body = res;
    return body || [ ] || { };
  }

  getCourse(): Observable<any>{
    return this.http.get(this.endpoint + '/List-Course', this.httpOptions).pipe(
      map(this.extractData)
    );
  }

  setCourse(save_course): Observable<any>{
    let params = JSON.stringify(save_course);
    return this.http.post(this.endpoint + '/Save-Course', params, this.httpOptions).pipe(
      map(this.extractData)
    );
  }
  searchCurso(search, search1): Observable<any>{
    console.log('Funciona buscardor');
    return this.http.post(this.endpoint + '/Search-Course', {search, search1}, this.httpOptions).pipe(map(this.extractData));
  }
  // private getToken():string{
  //   if(!this.token){
  //     this.token = localStorage.getItem("token");
  //     console.log(this.token)
  //   }
  //   return this.token;
  // }
  
}
