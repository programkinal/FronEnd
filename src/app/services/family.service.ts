import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FamilyService {

  endpoint = 'http://localhost:3789/Family';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  mensaje = 'Ejecuntando el guardar person';

  constructor(private http: HttpClient) { }

  private extractData(res: Response) {
    let body = res;
    return body || [ ] || { };
  }

  searchPerson(person){
    return this.http.post(this.endpoint + '/searchPerson', {person}, this.httpOptions).pipe(
      map(this.extractData)
    );
  }

  setFamily(save_family){
    let params = JSON.stringify(save_family);
    return this.http.post(this.endpoint + '/saveFamily', params, this.httpOptions).pipe(
      map(this.extractData)
    );
  }

  searchFamily(search): Observable<any>{
    return this.http.post(this.endpoint + '/searchFamily', {search}, this.httpOptions).pipe(
      map(this.extractData)
    );
  }

  updateFamily(familyId, update_family){
    let update = JSON.stringify(update_family);
    return this.http.put(this.endpoint + '/updateFamily' + '/' + familyId, update, this.httpOptions).pipe(
      map(this.extractData)
    );
  }

  getPerson(): Observable<any>{
    return this.http.get(this.endpoint + '/list-Person', this.httpOptions).pipe(
      map(this.extractData)
    );
  }
}
