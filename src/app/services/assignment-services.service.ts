import { Injectable } from '@angular/core';
import { HttpHeaders,HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AssignmentServicesService {
  endpoint = 'http://localhost:3789/EducativeAdministracion';
  httpOptions ={
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http: HttpClient) { }

  private extractData(res: Response) {
    let body = res;
    return body || [ ] || { };
  }
  getAssignment(): Observable<any>{
    return this.http.get(this.endpoint + '/report-Assignment', this.httpOptions).pipe(
      map(this.extractData)
    );
  }
  setAssignment(save_Assignment): Observable<any>{
    let params = JSON.stringify(save_Assignment);
    return this.http.post(this.endpoint + '/saveAssignment', params, this.httpOptions).pipe(
      map(this.extractData)
    );
  }
  getInstructor(): Observable<any>{
    return this.http.get(this.endpoint + '/List-Instructor-Assignment', this.httpOptions).pipe(
      map(this.extractData)
    )
  }
  getCareer(): Observable<any>{
    return this.http.get(this.endpoint + '/List-Career-Educative', this.httpOptions).pipe(
      map(this.extractData)
    )
  }
  getCourse(): Observable<any>{
    return this.http.get(this.endpoint +'/List-Course',this.httpOptions).pipe(
      map(this.extractData)
    )
  }
  setAssignmentCareer(save_Assignment): Observable<any>{
    let params = JSON.stringify(save_Assignment);
    return this.http.post(this.endpoint + '/report-Assignment-Career', params, this.httpOptions).pipe(
      map(this.extractData)
    );
  }

}
