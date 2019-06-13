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
  nameInstructor = [];
  curso = '';

  form = new FormGroup({
    name: new FormControl('', Validators.required),
    career: new FormControl('', Validators.required),
    jornada: new FormControl('', Validators.required),
    section: new FormControl('',Validators.required),
    instructor: new FormControl('',Validators.required)
  });
  constructor(private rest: AssignmentServicesService, private tostr: ToastrService, private params: ActivatedRoute, private routerLink: Router) { 
    this.rest.setAssignment(this.assignment);
    this.assignment = new Assignment('','','',[],'');
  }

  ngOnInit() {
    this.getCareer();
    this.getCourse();
    this.getInstructor();
  }
  onSubmit(){
    console.log(this.assignment)
    this.rest.setAssignment(this.assignment).subscribe(res => {
      if(res.message == 'Error al guardar'){
        this.tostr.error('Error al guardar','Error');
      }else{
        if(res.Guardado && res.Guardado._id){
          this.tostr.success('Se ha guardado correctamet','Guardar');
          this.routerLink.navigateByUrl('List-Assignment');
        }else if(res.message == 'La Asignatura ya fue registrada'){
          this.tostr.error('La Asignatura ya fue registrada','Error')
        }else if(res.message == 'Debes de llenar todos los campos'){
          this.tostr.error('Debes de llenar todos los campos','Error');
        }
      }
    })
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
  getInstructor(){
    this.rest.getInstructor().subscribe(res =>{
      // console.log(res.persona);
      for(let i = 0; i< res.instructor.length; i++){
        this.nameInstructor.push(res.instructor[i]);
        
      }
      console.log(res.instructor) 
    })
  }

  addCourse(){
    console.log(this.curso);
    this.assignment.course.push(this.curso);
    console.log(this.assignment.course);
    this.curso = '';

  }

  course(){

  }
}
