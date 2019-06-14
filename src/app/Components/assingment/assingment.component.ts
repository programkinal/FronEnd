import { Component, OnInit } from '@angular/core';
import { AssignmentServicesService } from '../../services/assignment-services.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute} from '@angular/router';
import { Router } from '@angular/router';
import { Assignment } from 'src/app/models/assignment';
import { FormGroup, Validators, FormControl } from '@angular/forms';
@Component({
  selector: 'app-assingment',
  templateUrl: './assingment.component.html',
  styleUrls: ['./assingment.component.css']
})
export class AssingmentComponent implements OnInit {
  assignment: Assignment;
  careers = [];
  courses = [];
  graders = []; 
  jornadas = [];
  sections = [];
  nameInstructor = [];
  curso = [];

  form = new FormGroup({
    name: new FormControl('', Validators.required),
    career: new FormControl('', Validators.required),
    jornada: new FormControl('', Validators.required),
    section: new FormControl('',Validators.required),
    course: new FormControl('',Validators.required),
    grader: new FormControl('',Validators.required)
  });
  constructor(private rest: AssignmentServicesService, private tostr: ToastrService, private params: ActivatedRoute, private routerLink: Router) { 
    this.rest.setAssignment(this.assignment);
    this.assignment = new Assignment('','','',[],'');
  }

  ngOnInit() {
    this.getCareer();
    this.getCourse();
    this.getGrader();
    // this.getSection();
    this.getInstructor();
  }
  onSubmit(){
    if(this.assignment.career == '' && this.assignment.grader == ''){
      this.assignment.career = '111111111111111111111111';
      this.assignment.grader = '111111111111111111111111';
      console.log(this.assignment)
      this.assignment.course = this.curso
      this.rest.setAssignment(this.assignment).subscribe(res => {
        if(res.message == 'Error al guardar'){
          this.tostr.error('Error al guardar','Error');
        }else{
          if(res.Guardado && res.Guardado._id){
            this.tostr.success('Se ha guardado correctamet','Guardar');
            this.routerLink.navigateByUrl('List-Assignment');
          }else if(res.message == 'La Asignatura ya fue registrada'){
            this.tostr.error('La Asignatura ya fue registrada','Error')
          }else if(res.message == 'El curso debe ir obligatoriamente'){
            this.tostr.error('El curso debe ir obligatoriamente','Error');
          }
        }
      })
    }else{
      console.log(this.assignment)
      this.assignment.course = this.curso
      this.rest.setAssignment(this.assignment).subscribe(res => {
        if(res.message == 'Error al guardar'){
          this.tostr.error('Error al guardar','Error');
        }else{
          if(res.Guardado && res.Guardado._id){
            this.tostr.success('Se ha guardado correctamet','Guardar');
            this.routerLink.navigateByUrl('List-Assignment');
          }else if(res.message == 'La Asignatura ya fue registrada'){
            this.tostr.error('La Asignatura ya fue registrada','Error')
          }else if(res.message == 'El curso debe ir obligatoriamente'){
            this.tostr.error('El curso debe ir obligatoriamente','Error');
          }
        }
      })
    }
    
  }

  getCareer(){
    this.rest.getCareer().subscribe(res => {
      // console.log('Estan son las carreras:' + res.career);
      for(let i = 0; i < res.career.length; i++){
        this.careers.push(res.career[i]);
      }
    });
  }
  getCourse(){
    this.rest.getCourse().subscribe(res =>{
      // console.log(res.course);
      for(let i =0; i<res.course.length; i++){
        this.courses.push(res.course[i]);
      }
    })
  }
  getGrader(){
    this.rest.getGradder().subscribe(res =>{
      for(let i = 0; i<res.grader.length; i++){
        this.graders.push(res.grader[i]);
        console.log(res)
      }
    })
  }
  getInstructor(){
    this.rest.getInstructor().subscribe(res =>{
      // console.log(res);
      this.nameInstructor = res.persona;
      console.log(this.nameInstructor)
    })
  }
  getJornada(){
    this.rest.getJornada().subscribe(res =>{
      for(let i = 0; i < res.jornada.length; i++){
        this.jornadas.push(res.jornada[i]);
      }
    })
  }
  getSection(){
    this.rest.getSection().subscribe(res =>{
      for(let i =0; i < res.section.length; i++){
        this.sections.push(res.section[i]);
        console.log(res)
      }
    })
  }

  addCourse(){
    // if(this.assignment.course.includes(this.curso)){
    //   this.tostr.error('El curso ya ha sido ingresado','Error')
    // }else{
      // for(let i =0; i < this.curso.length; i++){
      //   if(this.curso[i] == this.curso){
      //     this.tostr.error('Ya esta el mismo curso asignado','Error')
      //   }else{
          this.curso.push(this.assignment.course)
          // this.curso.push(this.assignment.course)
          this.assignment.course = ['']
          console.log(this.curso)
      //   }
      // }
      
    // }
  }
}
