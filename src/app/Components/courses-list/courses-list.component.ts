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
  cursos = [];
  results = [];
  search = '';

  insFil = [];
  select = '';

  constructor(public rest: CourseService) { 

  }

  ngOnInit() {
    this.getCourse();
  }
  getCourse(){
    this.rest.getCourse().subscribe(res =>{
      this.cursos = res.course;
      this.results = res.course;
      console.log(this.cursos)
    })
  }

  filter(){
    console.log(this.search)
    let person = this.cursos.filter(encontrado => {
      return (encontrado.name.indexOf(this.search.toUpperCase())>-1 ||
      encontrado.code.indexOf(this.search)>-1)
    });
    this.results = person;
    this.select = this.search;
  }

  add(id, name, lastName){
    //this.instructor.Person = id;
    this.search = name + ' ' + lastName;
    this.insFil = [];
    this.select = '';
  }

  onSubmit(){
    /*this.rest.searchCurso(this.search, this.search1).subscribe((res) => {
      if(!res){
          console.log();
      }else{
        this.results = res.results;
        console.log(res);
      } 
    });*/
  }




}