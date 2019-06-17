import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { RedesService } from 'src/app/services/redes.service'
import {FormControl, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Redes } from 'src/app/models/redes';
import { ListarRedesComponent } from '../listar-redes/listar-redes.component';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { Assignment } from 'src/app/models/assignment';
// import { RSA_NO_PADDING } from 'constants';


@Component({
  selector: 'app-redes',
  templateUrl: './redes.component.html',
  styleUrls: ['./redes.component.css']
})
export class RedesComponent implements OnInit {
  redes: Redes;
  assigment: Assignment;
  careers = [];
  courses = [];
  coursesF = [];
  coursenetworking =[];
  graders = [];
  selectx: string = '';
  form = new FormGroup({
    name: new FormControl('', Validators.required),
    career: new FormControl('', Validators.required),
    dateInit: new FormControl('', Validators.required),
    dateFinal: new FormControl('',Validators.required),
    careerAssigment: new FormControl('', Validators.required),
    grader: new FormControl('', Validators.required),
    course: new FormControl('', Validators.required)
  });

  @ViewChild('openModal') openModal:ElementRef;
  @ViewChild('select') select:ElementRef;
  @ViewChild('router1') router:ElementRef;

  constructor(public rest: RedesService,private toastr: ToastrService, private params: ActivatedRoute, private routerLink: Router) {
    this.rest.setRedes(this.redes);
    this.redes = new Redes('','','','','','','','');
    // this.assigment = new Assignment('','','',null,'');
  }
  
  

  ngOnInit() {
    this.getCareer();
    this.getCourse();
    this.getGraders();
    // this.getRedesCours();
    if(this.params.snapshot.params.id != ':id'){
      this.rest.buscandoRedes(this.params.snapshot.params.id).subscribe(res =>{
        this.redes.name = res.buscado.name
        this.redes.career = res.buscado.career
        this.redes.dateInit = res.buscado.dateInit
        this.redes.dateFinal = res.buscado.dateFinal
      })
      this.rest.buscarRedesAssignment().subscribe(res =>{
        this.assigment = res.asignaciones

        console.log(res.asignaciones)
      })
      
    }else{
      this.redes = new Redes('','','','');
    }
    
  }

  getCareer(){
    this.rest.getCareers().subscribe(res => {
      console.log(res.career);
      for(let i = 0; i < res.career.length; i++){
        this.careers.push(res.career[i]);
      }
    });
  }
  getCourse(){
    this.rest.getCourses().subscribe(res =>{
      for(let i =0; i < res.course.length; i ++){
        this.courses.push(res.course[i]);
      }
    })
  }
  getGraders(){
    this.rest.getGrader().subscribe(res =>{
      console.log(res);
      for(let i =0; i < res.grader.length; i++){
        this.graders.push(res.grader[i])
      }
    })
  }
  onSubmit(){
    if(this.params.snapshot.params.id == ':id'){
      this.rest.setRedes(this.redes).subscribe(res => {
        console.log(res)
        if(res.message == 'Debes de llenar todos los campos'){
          this.toastr.error('Debes de llenar todos los campos', 'Error');
        }else{
          if(res.Guardado && res.Guardado._id){
            this.toastr.success('Se ha guardado exitosamente!', 'Guardado');
            this.openModal.nativeElement.click();
            this.routerLink.navigateByUrl('List-Redes');
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
    }else{
      this.rest.updateRedes(this.redes,this.params.snapshot.params.id).subscribe(res=>{
        if(res.message == 'No se pudo actualizar'){
          this.toastr.error('No se pudo actualizar','Error');
        }else{
          if(res.actualizado &&  res.actualizado._id){
            this.toastr.success('Se ha actualizado exitosamente!','Actualizado');
            this.routerLink.navigateByUrl('List-Redes');
          }else if(res.message == 'Las carreras tienen ser las mismas'){
            this.toastr.error('Las carreras tienen ser las mismas');
          }
        }
      })
    }
    
  }

}
