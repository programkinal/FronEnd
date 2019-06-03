import { Component, OnInit } from '@angular/core';
import { Instructor } from '../../models/instructor'
import { InstructorService } from '../../services/instructor.service'
import { copyStyles } from '@angular/animations/browser/src/util';
@Component({
  selector: 'app-list-instructor',
  templateUrl: './list-instructor.component.html',
  styleUrls: ['./list-instructor.component.css']
})
export class ListInstructorComponent implements OnInit {
  instructor: Instructor;
  search: String;
  search1: String;
  instructores = [];
  results = [];
  constructor(public rest: InstructorService) { }

  ngOnInit() {
    this.getInstructor();
  }
  getInstructor(){
    this.rest.getInstructor().subscribe(res =>{
      this.instructores = res.instructor;
    })
  }

  /*onSubmit(){
    this.rest.searchInstructor(this.search, this.search1).subscribe((res)=>{
      if(!res){
        console.log();
      }else{
        this.results = res.results;
        console.log(res);
      }
    });
  }*/

  id(_id){
    console.log(_id);
  }
}
