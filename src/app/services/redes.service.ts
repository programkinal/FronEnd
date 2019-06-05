import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Redes } from '../models/redes';
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
  // public selectedRedes: Redes = {
  //   id: null
  // };
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

  searchCareer(_id){
    let id = _id;
    return this.http.post(this.endpoint + '/SearchCareer', {id}, this.httpOptions).pipe(
      map(this.extractData)
    );
  }
  buscandoRedes(id): Observable<any>{
    return this.http.get(this.endpoint + '/BuscarRedes/' +id, this.httpOptions).pipe(
      map(this.extractData)
    )
  }
  updateRedes(updaate_Redes, id): Observable<any>{
    let params = JSON.stringify(updaate_Redes);
    return this.http.put(this.endpoint + '/updateRedes/' + id, params, this.httpOptions).pipe(
      map(this.extractData)
    )
  }
  deleteRedes(id): Observable<any>{
    return this.http.put(this.endpoint + '/deleteRedes/' + id, this.httpOptions).pipe(
      map(this.extractData)
    )
  }
}
