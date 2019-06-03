import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InstructorService {
  endpoint = 'http://localhost:3789/EducativeAdministracion';
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

  getInstructor(): Observable<any>{
    return this.http.get(this.endpoint + '/listInstructor').pipe(
      map(this.extractData)
    );
  }

  setInstructor(save_instructor): Observable<any>{
    let params = JSON.stringify(save_instructor);
    return this.http.post(this.endpoint + '/saveInstructor', params, this.httpOptions).pipe(
      map(this.extractData)
    );
  }
  searchInstructor(search, search1): Observable<any>{
    console.log('Funciona buscardor');
    return this.http.post(this.endpoint + '/list', {search, search1}, this.httpOptions).pipe(map(this.extractData));
  }

  updateInstructor(id, update){
    return this.http.put(this.endpoint + '/updateInstructor/' + id, {update}, this.httpOptions).pipe(
      map(this.extractData)
    );
  }
}
