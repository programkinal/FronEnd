import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormControl, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import { Course } from '../../models/course'
import { CourseService } from '../../services/course.service'
@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {
  curso: Course;
  search: String;
  search1: String;
  cursos: [];
  results: [];
  constructor(public rest: CourseService) { 

  }

  ngOnInit() {
    this.getCourse();
  }
  getCourse(){
    this.rest.getCourse().subscribe(res =>{
      this.cursos = res.course
      console.log(this.cursos)
    })
  }

  onSubmit(){
    this.rest.searchCurso(this.search, this.search1).subscribe((res) => {
      if(!res){
          console.log();
      }else{
        this.results = res.results;
        console.log(res);
      } 
    });
  }




}