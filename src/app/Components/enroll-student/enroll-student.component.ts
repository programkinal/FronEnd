import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormGroup } from '@angular/forms';
import { Inscription } from 'src/app/models/inscription';
import { InscriptionService } from '../../services/inscription.service'
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-enroll-student',
  templateUrl: './enroll-student.component.html',
  styleUrls: ['./enroll-student.component.css']
})
export class EnrollStudentComponent implements OnInit {
  enrollStudents: Inscription;
  input = '';
  person = [];
  personFi = [];
  unitAcademy = [];
  jornada = [];
  career = [];
  grade = [];
  search = '';
  select = '';
  carrera = '';
  unit = '';

  form = new FormGroup({
    person: new FormControl('', Validators.required),
    jornada: new FormControl('', Validators.required),
    grade: new FormControl('', Validators.required),
    cash: new FormControl('', Validators.required)
  });
  constructor(public rest: InscriptionService, private toastr: ToastrService, private params: ActivatedRoute, private routerLink: Router) {
    this.rest.saveInscription(this.enrollStudents);
    this.enrollStudents = new Inscription('','','','',null,'','');
   }

  ngOnInit() {
    /*if(this.params.snapshot.params.id != ':id'){
      this.rest.searchInstructor(this.params.snapshot.params.id).subscribe(res =>{
        this.instructor.code = res.instructor.code
        this.search = res.instructor.Person.firstName + ' ' +res.instructor.Person.firstLastName
        this.instructor.profesion = res.instructor.profesion
        console.log('Este es el nombre de la persona:' + res.instructor.Person.firstName);
      })
    }else{
      this.instructor = new Instructor('','','');
    }*/
    this.getPerson();
    this.getJornada();
    this.getUnitAcademy();
    this.getCareer();
    this.getGrade();
  }

  getPerson(){
    this.rest.listPerson().subscribe(res => {
      this.person = res.persons;
      this.personFi = res.perons;
    });
  }

  getJornada(){
    this.rest.listJornada().subscribe(res => {
      this.jornada = res.jornadas;
    });
  }

  getUnitAcademy(){
    this.rest.listUnitAcademy().subscribe(res => {
      this.unitAcademy = res.units;
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
      console.log(this.grade)
    });
  }

  filter(){
    console.log("hola")
    let person = this.person.filter(encontrado => {
      return (encontrado.firstName.indexOf(this.search.toUpperCase())>-1 ||
      encontrado.firstLastName.indexOf(this.search)>-1)
    });
    this.personFi = person;
    this.select = this.search;
  }

  add(id, name, lastName){
    var date = new Date();
    this.enrollStudents.person = id;
    this.search = name + ' ' + lastName;
    this.personFi = [];
    this.select = '';
  }

  onSumit(){
    
    this.enrollStudents.unitAcademy = this.unit;
    this.enrollStudents.career = this.carrera;
    console.log(this.enrollStudents);
      this.rest.saveInscription(this.enrollStudents).subscribe(res => {
        
          if(res.message == 'Error al guardar'){
            this.toastr.error('El codigo ya fue registrado', 'Error');
          }else{
            console.log('Se guardo');
            // this.routerLink.navigateByUrl('/listInstructor');
            this.toastr.success('Se han guardado los datos exitosamente', 'Guardar');
            this.enrollStudents.person = '';
            this.enrollStudents.jornada = '';
            this.enrollStudents.unitAcademy = '';
            this.enrollStudents.grade = '';
            this.enrollStudents.share = null;
            this.search = '';
          }
        
      });
    
  //   }else{
  //     this.rest.updateInstructor(this.params.snapshot.params.id, this.instructor).subscribe(res => {
  //       if(res.message == 'Error al acutalizar'){
  //         this.toastr.error('No se pudo actualizar','Error');
  //       }else{
  //         if(res.instructor &&  res.instructor._id){
  //           this.toastr.success('Se ha actualizado exitosamente!','Actualizado');
  //           this.routerLink.navigateByUrl('listInstructor');
  //         }
  //       }
  //     });
  //   }
  // }
  }
}
