import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { EnrollStudents } from 'src/app/models/enroll-students';

@Component({
  selector: 'app-enroll-student',
  templateUrl: './enroll-student.component.html',
  styleUrls: ['./enroll-student.component.css']
})
export class EnrollStudentComponent implements OnInit {
  enrollStudents: EnrollStudents
  s = ''

  Auyon(value){
    this.s = this.enrollStudents.unitAcademy;
    console.log(this.s)
  }


 
  form = new FormGroup({
    name: new FormControl('', Validators.required),
    unidadAcademica: new FormControl('', Validators.required),
    jornada: new FormControl('', Validators.required),
    cash: new FormControl('', Validators.required),
    grade: new FormControl('', Validators.required)
  });
  constructor() {
    this.enrollStudents = new EnrollStudents('','','','','');
   }

  ngOnInit() {
    console.log(this.s)
  }

}
