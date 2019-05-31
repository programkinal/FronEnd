import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormGroup } from '@angular/forms';
import { Instructor } from '../../models/instructor';
import { InstructorService } from '../../services/instructor.service';
import { validateConfig } from '@angular/router/src/config';
import { ToastrService } from 'ngx-toastr';
import { isRegExp } from 'util';

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
  constructor(public rest: InstructorService, private toastr: ToastrService) { 
    this.rest.setInstructor(this.instructor);
    this.instructor = new Instructor('','','')
  }

  ngOnInit() {
  }

  onSumit(){
    this.rest.setInstructor(this.instructor).subscribe(res =>{
      console.log(res)
      if(res.message == 'Debes llenar todos los campos'){
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
    })
  }

}
