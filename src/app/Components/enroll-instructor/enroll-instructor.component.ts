import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-enroll-instructor',
  templateUrl: './enroll-instructor.component.html',
  styleUrls: ['./enroll-instructor.component.css']
})
export class EnrollInstructorComponent implements OnInit {

  form = new FormGroup({
    course: new FormControl('', Validators.required),
    instructor: new FormControl('', Validators.required)
  });



  constructor() { }

  ngOnInit() {
  }

}
