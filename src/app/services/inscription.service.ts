import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InscriptionService {
  endpoint = 'http://localhost:3789/Inscription';
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

  listPerson(): Observable<any>{
    return this.http.get(this.endpoint + '/listPerson', this.httpOptions).pipe(
      map(this.extractData)
    );
  }

  listUnitAcademy(): Observable<any>{
    return this.http.get(this.endpoint + '/listUnitAcademy', this.httpOptions).pipe(
      map(this.extractData)
    );
  }

  listCareer(): Observable<any>{
    return this.http.get(this.endpoint + '/listCareer', this.httpOptions).pipe(
      map(this.extractData)
    );
  }

  listJornada(): Observable<any>{
    return this.http.get(this.endpoint + '/listJornada', this.httpOptions).pipe(
      map(this.extractData)
    );
  }

  listGrade(): Observable<any>{
    return this.http.get(this.endpoint + '/listGrade', this.httpOptions).pipe(
      map(this.extractData)
    );
  }

  saveInscription(save_inscription): Observable<any>{
    let params = JSON.stringify(save_inscription);
    return this.http.post(this.endpoint + '/saveInscription', this.httpOptions).pipe(
      map(this.extractData)
    );
  }
}
