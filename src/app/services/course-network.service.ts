import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CourseNetworkService {
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

  getCourseNetwork(): Observable<any>{
    return this.http.get(this.endpoint + '/List-Course-Network', this.httpOptions).pipe(
      map(this.extractData)
    );
  }

  setCourseNetwork(save_network): Observable<any>{
    let params = JSON.stringify(save_network);
    return this.http.post(this.endpoint + '/save-Course-Networks', params, this.httpOptions).pipe(
      map(this.extractData)
    );
  }
  updateCourseNetwork(id, update): Observable<any>{
    let params = JSON.stringify(update);
    return this.http.put(this.endpoint + '/Update-Course-Network/' + id, params, this.httpOptions).pipe(
      map(this.extractData)
    );
  }

  deleteCourseNetwork(id): Observable<any>{
    return this.http.put(this.endpoint + '/Delete-Course-Network/:id' + id, this.httpOptions).pipe(
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
  getGradder(): Observable<any>{
    return this.http.get(this.endpoint + '/report-Assignment-Grader', this.httpOptions).pipe(
      map(this.extractData)
    )
  }
  getRedes(): Observable<any>{
    return this.http.get(this.endpoint + '/listRedes', this.httpOptions).pipe(
      map(this.extractData)
    )
  }
}
