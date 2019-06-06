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

  searchInstructor(id): Observable<any>{
    return this.http.post(this.endpoint + '/searchInstructor/' + id, this.httpOptions).pipe(
      map(this.extractData)
    );
  }

  updateInstructor(id, update): Observable<any>{
    let params = JSON.stringify(update);
    return this.http.put(this.endpoint + '/updateInstructor/' + id, params, this.httpOptions).pipe(
      map(this.extractData)
    );
  }

  deleteInstructor(id): Observable<any>{
    return this.http.put(this.endpoint + '/deleteInstructor/' + id, this.httpOptions).pipe(
      map(this.extractData)
    );
  }
}
