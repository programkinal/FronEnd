import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { RedesService } from 'src/app/services/redes.service'
import {FormControl, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Redes } from 'src/app/models/redes';
@Component({
  selector: 'app-redes',
  templateUrl: './redes.component.html',
  styleUrls: ['./redes.component.css']
})
export class RedesComponent implements OnInit {
  redes: Redes;
  careers = [];
  courses = [];
  coursesF = [];
  selectx: string = '';
  form = new FormGroup({
    name: new FormControl('', Validators.required),
    career: new FormControl('', Validators.required),
    dateInit: new FormControl('', Validators.required),
    dateFinal: new FormControl('',Validators.required)
  });

  @ViewChild('select') select:ElementRef;

  constructor(public rest: RedesService,private toastr: ToastrService) {
    this.rest.setRedes(this.redes);
    this.redes = new Redes('','','','');
  }

  ngOnInit() {
    this.getCareer();
  }

  getCareer(){
    this.rest.getCareers().subscribe(res => {
      console.log(res.career);
      for(let i = 0; i < res.career.length; i++){
        this.careers.push(res.career[i]);
      }
    });
  }
  onSubmit(){
   
    this.rest.setRedes(this.redes).subscribe(res => {
      console.log(res)
      if(res.message == 'Debes de llenar todos los campos'){
        this.toastr.error('Debes de llenar todos los campos', 'Error');
      }else{
        if(res.Guardado && res.Guardado._id){
          this.toastr.success('Se ha guardado exitosamente!', 'Guardado');
          console.log(this.redes)
        }else if(res.message == 'La red de estudio ya esta registrada'){
          this.toastr.error('La red ingresada ya esta registrada en el sistema', 'Error');
        }else if(res.message == 'Debes de llenar todos los campos'){
          this.toastr.error('Debes de llenar todos los campos', 'Error');
        }else if(res.message == 'La fecha no puede ser la misma que la inicial'){
          this.toastr.error('La fecha no puede ser la misma que la inicial','Error');
        }else if(res.message == 'La Fecha final es antes que la fecha de incio'){
          this.toastr.error('La Fecha final es antes que la fecha de incio', 'Erorr')
        }
      }
    });
  }

}
