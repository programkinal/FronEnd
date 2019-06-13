import { Component, OnInit } from '@angular/core';
import { AssignmentInstructorCourse } from 'src/app/models/assignment-instructor-course';
import { AssignmentInstructorCourseService } from 'src/app/services/assignment-instructor-course.service';

@Component({
  selector: 'app-list-assignment-instructor-course',
  templateUrl: './list-assignment-instructor-course.component.html',
  styleUrls: ['./list-assignment-instructor-course.component.css']
})
export class ListAssignmentInstructorCourseComponent implements OnInit {
  assigment: AssignmentInstructorCourse
  constructor(public rest: AssignmentInstructorCourseService) { }

  ngOnInit() {
    this.getAssignmentCourseInstructor()
  }
  getAssignmentCourseInstructor(){
    this.rest.getAssignmentInstructorCourse().subscribe(res =>{
      this.assigment = res.Assignment
      console.log(res)
    })
  }
}
