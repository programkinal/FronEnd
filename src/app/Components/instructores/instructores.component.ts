import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormGroup } from '@angular/forms';
import { Instructor } from '../../models/instructor';
import { InstructorService } from '../../services/instructor.service';
import { validateConfig } from '@angular/router/src/config';
import { ToastrService } from 'ngx-toastr';
import { isRegExp } from 'util';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-instructores',
  templateUrl: './instructores.component.html',
  styleUrls: ['./instructores.component.css']
})
export class InstructoresComponent implements OnInit {
  instructor: Instructor;
  form = new FormGroup({
    code: new FormControl('', Validators.required),
    profesion: new FormControl('', Validators.required),
    Person: new FormControl('', Validators.required),
  });
  constructor(public rest: InstructorService, private toastr: ToastrService,private params: ActivatedRoute, private routerLink: Router) { 
    this.rest.setInstructor(this.instructor);
    this.instructor = new Instructor('','','')
  }

  ngOnInit() {
    if(this.params.snapshot.params.id != ':id'){
      this.rest.searchInstructor(this.params.snapshot.params.id).subscribe(res =>{
        this.instructor.code = res.instructor.code
        this.instructor.Person = res.instructor.Person
        this.instructor.profesion = res.instructor.profesion
      })
    }else{
      this.instructor = new Instructor('','','');
    }
  }

  onSumit(){
    if(this.params.snapshot.params.id == ':id'){
      this.rest.setInstructor(this.instructor).subscribe(res => {
        if(res.message == 'Llene todos los campos'){
          this.toastr.error('Llenar todos los campos');
        }else{
          if(res.Instructor && res.Instructor_id){
            console.log('Se guardo');
            this.toastr.success('Se han guardado los datos exitosamente', 'Guardar');
            this.instructor.code = ''
            this.instructor.profesion = ''
            this.instructor.Person = ''
  
          }else if(res.message == 'El codigo ya fue registrado'){
            this.toastr.error('El codigo ya fue registrado', 'Error');
          }
        }
      });
    }else{
      this.rest.updateInstructor(this.params.snapshot.params.id, this.instructor).subscribe(res => {
        if(res.message == 'Error al acutalizar'){
          this.toastr.error('No se pudo actualizar','Error');
        }else{
          if(res.instructor &&  res.instructor._id){
            this.toastr.success('Se ha actualizado exitosamente!','Actualizado');
            this.routerLink.navigateByUrl('listInstructor');
          }
        }
      });
    }
  }

}
