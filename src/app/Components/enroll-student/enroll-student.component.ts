import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Inscription } from 'src/app/models/inscription';
import { InscriptionService } from '../../services/inscription.service'
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-enroll-student',
  templateUrl: './enroll-student.component.html',
  styleUrls: ['./enroll-student.component.css']
})
export class EnrollStudentComponent implements OnInit {
  enrollStudents: Inscription;
  input = '';
  person = [];
  unitAcademy = [];
  jornada = [];
  career = [];
  grade = [];

  form = new FormGroup({
    unidadAcademica: new FormControl('', Validators.required),
    jornada: new FormControl('', Validators.required),
    cash: new FormControl('', Validators.required),
    grade: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required)
  });
  constructor(public rest: InscriptionService, private toastr: ToastrService) {
    this.rest.saveInscription(this.enrollStudents);
    this.enrollStudents = new Inscription('','',[],'',null);
   }

  ngOnInit() {
  }

  getPerson(){
    this.rest.listPerson().subscribe(res => {
      this.person = res;
    });
  }

  getJornada(){
    this.rest.listJornada().subscribe(res => {
      this.jornada = res.jornadas;
    });
  }

  getUnitAcademy(){
    this.rest.listUnitAcademy().subscribe(res => {
      this.unitAcademy = res;
    });
  }

  getCareer(){
    this.rest.listCareer().subscribe(res => {
      this.career = res.careers;
    });
  }

  getGrade(){
    this.rest.listGrade().subscribe(res => {
      this.grade = res.grades;
    });
  }
}
