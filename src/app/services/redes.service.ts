import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class RedesService {
  endpoint = 'http://localhost:3789/EducativeAdministracion';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  mensaje = 'Ejecutando el guardar';

  constructor(private http: HttpClient) { }

  private extractData(res: Response) {
    let body = res;
    return body || [ ] || { };
  }

  getRedes(): Observable<any>{
    return this.http.get(this.endpoint + '/listRedes', this.httpOptions).pipe(
      map(this.extractData)
    );
  }

  getCareers(): Observable<any>{
    return this.http.get(this.endpoint + '/List-Career-Educative', this.httpOptions).pipe(
      map(this.extractData)
    );
  }

  getCourses(): Observable<any>{
    return this.http.get(this.endpoint + '/List-Course', this.httpOptions).pipe(
      map(this.extractData)
    );
  }

  setRedes(save_StudyNetwork): Observable<any>{
    let params = JSON.stringify(save_StudyNetwork);
    return this.http.post(this.endpoint + '/saveRedes', params, this.httpOptions).pipe(
      map(this.extractData)
    );
  }


}
