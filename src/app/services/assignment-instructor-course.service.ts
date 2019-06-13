import { Injectable } from '@angular/core';
import { HttpHeaders,HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AssignmentInstructorCourseService {
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
  // listar todo las asssignacioones del instructor con el curso
  getAssignmentInstructorCourse(): Observable<any>{
    return this.http.get(this.endpoint + '/List-Assignment-Instructor-Course', this.httpOptions).pipe(
      map(this.extractData)
    )
  }
// guardar la asignacion del instructor con el curso
  setAssignmentInstructor(save_Assignment): Observable<any>{
    let params = JSON.stringify(save_Assignment);
    return this.http.post(this.endpoint + '/saveAssignmentInstructor-Course', params, this.httpOptions).pipe(
      map(this.extractData)
    );
  }
// Traer todos los instructores necesarios
  getInstructor(): Observable<any>{
    return this.http.get(this.endpoint + '/List-Instructor-Assignment', this.httpOptions).pipe(
      map(this.extractData)
    )
  }
  // Traer todos los cursos 
  getCourse(): Observable<any>{
    return this.http.get(this.endpoint +'/List-Course',this.httpOptions).pipe(
      map(this.extractData)
    )
  }
}
