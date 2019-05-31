import { Component, OnInit, Input } from '@angular/core';
import { Person } from '../../models/person';
import { PersonServiceService } from '../../services/person-service.service';
import { EmailValidator, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import { IfStmt } from '@angular/compiler';
import { Router } from '@angular/router';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  titulo = 'Modulo de persona';
  person: Person;
  message = 'Dato guardado';
  emaii = []
  telephone =  []
  address = [];
  campo: String
  valor: String =''
  DEPARTAMENTO: String =''
  MUNICIPIO: String =''
  COLONIA: String =''
  ZONA: String =''
  RESIDENCIAL: String =''
  AVENIDA: String =''
  CALLE: String =''
  SECTOR: String =''
  MANZANA: String =''
  NUMERO: String =''
  EDIFICIO: String =''
  NIVEL: String =''

  form = new FormGroup({
    firstName: new FormControl('', Validators.required),
    firstLastName: new FormControl('', Validators.required),
    marriedName: new FormControl('', Validators.required),
    birthname: new FormControl('', Validators.required),
    civilStatus: new FormControl('', Validators.required),
    religion: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
   
  });
  

  constructor(public rest: PersonServiceService,private toastr: ToastrService) {
    this.rest.setPerson(this.person);
    this.person = new Person('','','','','',null,'',null,'','',[],null);
  }

  ngOnInit() {

  }

  onSumit() {
    if(this.person.firstName == '' || this.person.firstLastName == '' || this.person.birthname == null || this.person.civilStatus == '' || this.person.religion == '' || this.person.gender == ''){
      this.toastr.error('Debes de llenar todos los campos', 'Error')
    }else{
      if(this.person.gender == 'FEMENINO' && this.person.civilStatus == 'CASADA' && this.person.marriedName != ''){
        this.save();
      }else if(this.person.gender == 'MASCULINO'){
        this.save();
      }  
    }
  }

  save(){
    console.log(JSON.stringify(this.person))
    this.person.email = this.emaii;
    this.person.phones = this.telephone;
    this.person.address = this.address;
    this.rest.setPerson(this.person).subscribe(res => {
      console.log(res);
    });
    console.clear();
  }
  addEmail(){
   if(this.person.email.indexOf('@' ) > -1){
     this.emaii.push(this.person.email);
     this.toastr.success('Esta correcto el correo', 'Agregado');
     console.log(this.emaii); 
   }else{
    this.toastr.error('El correo no esta correcto', 'Error');
    
   }

  }
  

  addPhone(){
    this.telephone.push(this.person.phones);
    console.log("datos guardados de phone",this.telephone);
    this.person.phones = [''];
  }
  addAddress(){
    if(this.campo === "DEPARTAMENTO" ){
      this.address.push(this.campo, this.valor);
      console.log(this.address);
      this.DEPARTAMENTO = this.valor
      this.campo = '';
      this.valor = ''
    }else{
      if(this.campo === 'MUNICIPIO'){
        this.address.push(this.campo, this.valor);
        console.log(this.address);
        this.MUNICIPIO = this.valor
        this.campo = '';
        this.valor = ''
      }else{
        if(this.campo === 'ZONA'){
          this.address.push(this.campo, this.valor);
          console.log(this.address);
          this.ZONA = this.valor
          this.campo = '';
          this.valor = ''
        }else{
          if(this.campo === 'COLONIA'){
            this.address.push(this.campo, this.valor);
            console.log(this.address);
            this.COLONIA = this.valor
            this.campo = '';
            this.valor = ''
          }else{
            if(this.campo === 'RESIDENCIAL'){
              this.address.push(this.campo, this.valor);
              console.log(this.address);
              this.RESIDENCIAL = this.valor
              this.campo = '';
              this.valor = ''
            }else{
              if(this.campo === 'AVENIDA'){
                this.address.push(this.campo, this.valor);
                console.log(this.address);
                this.AVENIDA = this.valor
                this.campo = '';
                this.valor = ''
              }else{
                if(this.campo === 'CALLE'){
                  this.address.push(this.campo, this.valor);
                  console.log(this.address);
                  this.CALLE = this.valor
                  this.campo = '';
                  this.valor = ''
                }else{
                  if(this.campo === 'SECTOR'){
                    this.address.push(this.campo, this.valor);
                    console.log(this.address);
                    this.SECTOR = this.valor
                    this.campo = '';
                    this.valor = ''
                  }else{
                    if(this.campo === 'MANZANA'){
                      this.address.push(this.campo, this.valor);
                      console.log(this.address);
                      this.MANZANA = this.valor
                      this.campo = '';
                      this.valor = ''
                    }else{
                      if(this.campo === 'NUMERO'){
                        this.address.push(this.campo, this.valor);
                        console.log(this.address);
                        this.NUMERO = this.valor
                        this.campo = '';
                        this.valor = ''
                      }else{
                        if(this.campo === 'EDIFICIO'){
                          this.address.push(this.campo, this.valor);
                          console.log(this.address);
                          this.EDIFICIO = this.valor
                          this.campo = '';
                          this.valor = ''
                        }else{
                          if(this.campo === 'NIVEL'){
                            this.address.push(this.campo, this.valor);
                            console.log(this.address);
                            this.NIVEL = this.valor
                            this.campo = '';
                            this.valor = ''
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      
    }
    
    
  }
}