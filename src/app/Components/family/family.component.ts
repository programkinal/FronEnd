import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Family } from '../../models/family';
import { FamilyService } from '../../services/family.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-family',
  templateUrl: './family.component.html',
  styleUrls: ['./family.component.css']
})
export class FamilyComponent implements OnInit {
  family: Family;
  search: string = '';
  search2: string = '';
  search3: string = '';
  search4: string = '';
  p1:boolean = false;
  p2:boolean = false;
  p3:boolean = false;
  p4:boolean = false;
  sPerson1 = [];
  sPerson2 = [];
  sPerson3 = [];
  sPerson4 = [];
  person = [];
  results = [];
  inCharge = [];
  son = [];
  select;
  select2;
  select3;
  select4;
  tituloFa: string = "Agregar Familia";
  preguntaFa: string = "¿Ya tienes familia?";
  botonFa: string = "Crear familia";
  updateFa: boolean = false;
  id: string = "";
  correct: string = '';
  correctIC: string = '';
  correctS: string = '';
  sp: boolean = false;
  num = [];
  valor = [];

  @ViewChild('openModal') openModal:ElementRef;
  @ViewChild('closeModal') closeModal:ElementRef;
  @ViewChild('buscar') buscar:ElementRef;

  constructor(public rest: FamilyService, private toastr: ToastrService) {
    this.rest.setFamily(this.family);
    this.family = new Family('','','',null,null);
  }

  ngOnInit() {
    this.openModal.nativeElement.click();
    this.getPerson1();
    this.getPerson2();
    this.getPerson3();
    this.getPerson4();

  }

  filterP1(){
    this.p1 = true;
    let person = this.sPerson1.filter(encontrado => {
      return (encontrado.firstName.indexOf(this.search)>-1 ||
      encontrado.middleName.indexOf(this.search)>-1 ||
      encontrado.firstLastName.indexOf(this.search)>-1 ||
      encontrado.secondLastName.indexOf(this.search)>-1);
    })
    if(this.search == ""){
      this.getPerson1();
      this.sPerson1= [];  
    }else{
      this.sPerson1 = person;
    }
  }

  getPerson1(){
    this.rest.getPerson().subscribe(res => {
      console.log(res.persons[0]);
      for(let i = 0; i < res.persons.length; i++){
        this.sPerson1.push(res.persons[i]);
        this.num.push(i);
      }
    });
  }

  filterP2(){
    this.p2 = true;
    let person = this.sPerson2.filter(encontrado => {
      return (encontrado.firstName.indexOf(this.search2)>-1 ||
      encontrado.middleName.indexOf(this.search2)>-1 ||
      encontrado.firstLastName.indexOf(this.search2)>-1 ||
      encontrado.secondLastName.indexOf(this.search2)>-1);
    })
    if(this.search2 == ""){
      this.getPerson1();
      this.sPerson2= [];  
    }else{
      this.sPerson2 = person;
    }
  }

  getPerson2(){
    this.rest.getPerson().subscribe(res => {
      console.log(res.persons[0]);
      for(let i = 0; i < res.persons.length; i++){
        this.sPerson2.push(res.persons[i]);
        this.num.push(i);
      }
    });
  }
  filterP3(){
    this.p3 = true;
    let person = this.sPerson3.filter(encontrado => {
      return (encontrado.firstName.indexOf(this.search3)>-1 ||
      encontrado.middleName.indexOf(this.search3)>-1 ||
      encontrado.firstLastName.indexOf(this.search3)>-1 ||
      encontrado.secondLastName.indexOf(this.search3)>-1);
    })
    if(this.search3 == ""){
      this.getPerson1();
      this.sPerson3 = [];  
    }else{
      this.sPerson3 = person;
    }
  }

  getPerson3(){
    this.rest.getPerson().subscribe(res => {
      console.log(res.persons[0]);
      for(let i = 0; i < res.persons.length; i++){
        this.sPerson3.push(res.persons[i]);
        this.num.push(i);
      }
    });
  }
  filterP4(){
    this.p4 = true;
    let person = this.sPerson4.filter(encontrado => {
      return (encontrado.firstName.indexOf(this.search4)>-1 ||
      encontrado.middleName.indexOf(this.search4)>-1 ||
      encontrado.firstLastName.indexOf(this.search4)>-1 ||
      encontrado.secondLastName.indexOf(this.search4)>-1);
    })
    if(this.search4 == ""){
      this.getPerson1();
      this.sPerson4= [];  
    }else{
      this.sPerson4 = person;
    }
  }

  getPerson4(){
    this.rest.getPerson().subscribe(res => {
      console.log(res.persons[0]);
      for(let i = 0; i < res.persons.length; i++){
        this.sPerson4.push(res.persons[i]);
        this.num.push(i);
      }
    });
  }

  add(indice){
    this.select = this.sPerson1[indice];
    this.search = this.select.firstName + ' ' + this.select.firstLastName;
    this.p1 = false;
  }

  add2(indice){
    this.select2 = this.sPerson2[indice];
    this.search2 = this.select2.firstName + ' ' + this.select2.firstLastName;
    this.p2 = false;
  }

  add3(indice){
    this.select3 = this.sPerson3[indice];
    this.search3 = this.select3.firstName + ' ' + this.select3.firstLastName;
    this.p3 = false;
  }

  add4(indice){
    this.select4 = this.sPerson4[indice];
    this.search4 = this.select4.firstName + ' ' + this.select4.firstLastName;
    this.p4 = false;
  }

  onSubmit(){
    if(this.family.inCharge != null){
      this.addInCharge();
    }
    if(this.family.son != null){
      this.addSon();
    }
    //this.searchPerson1();
    /*this.searchPerson2();
    this.searchPerson3();
    this.searchPerson4();*/
    this.family.inCharge = this.inCharge;
    this.family.son = this.son;
    this.family.father = this.select._id;
    this.family.mother = this.select._id;
    if(this.family.inCharge == null || this.family.son == null || this.family.mother == null || this.family.father == null){
      this.toastr.error('Ingrese todos los datos');
    }else{
      if(this.updateFa == false){
        if(this.correct.includes("0") == false && this.correctIC.includes("0") == false && this.correctS.includes("0") == false){
          this.rest.setFamily(this.family).subscribe((res) => {
          });
          this.toastr.success('Los datos fueron ingresados exitosamente');
          this.correct = '';
          this.correctIC = '';
          this.correctS = '';
          this.search = '';      
        }else{
          this.correct = '';
          this.correctIC = '';
          this.correctS = '';
        }
      }else{
        if(this.correct.includes("0") == false && this.correctIC.includes("0") == false && this.correctS.includes("0") == false){
          this.updateFamily();
          this.toastr.success('Los datos se actualizaron exitosamente');
          this.correct = '';
          this.correctIC = '';
          this.correctS = '';
        }else{
          this.correct = '';
          this.correctIC = '';
          this.correctS = '';
        }
      }
    }
  }

  csf1(){
    if(this.search == null){
      this.toastr.error('No puede avanzar, por favor ingrese los datos');
    }else{
      if(this.botonFa == "Crear familia"){
        this.updateFa = false;
        this.csf2();
      }else{
        this.csf2();
      }
    }
  }

  csf2(){
    this.rest.searchFamily(this.search).subscribe((res):any => {
      if(this.botonFa == "Crear familia"){
        if(res.message == "No hay registros"){
          this.family.name = this.search;
          this.closeModal.nativeElement.click();
        }else if(res){
          this.toastr.error('Usted ya cuenta con una familia');
        }
      }else{
        if(res.message == "No hay registros"){
          this.toastr.error('No se encontro su familia');
        }
      }
    });
  }
/*
  searchPerson1(){
    if(this.family.father != '' && this.family.father != ' '){
      this.person = this.family.father.split(" ");
      console.log(this.person);
      this.rest.searchPerson(this.person).subscribe((res3):any => {
        for(let i = 0; i < res3.results.length; i++){
          this.searchPerson.push(res3.results[i]);
          this.num.push(i);
        }
        if(res3.message != "No hay registros"){
          this.correct = this.correct + '1';
          this.sp = true;
          console.log(this.num);
          console.log(this.correct);
        }else{
          this.correct = this.correct + '0';
          this.toastr.error('No se encontro al padre');
        }
      });
    }else{
      this.searchPerson = null;
    }
  }*/

  searchPerson2(){
    /*this.person = this.family.mother.split(" ");
    this.rest.searchPerson(this.person).subscribe((res3: any) => {
      if(res3.message == "No hay registros"){
        this.correct = this.correct + '1';
      }else{
        this.toastr.error('No se encontro a la persona');
        this.correct = this.correct + '0';
        this.toastr.error('No se encontro a la madre');
        console.log(this.correct);
      }
    });*/
  }

  searchPerson3(){
    console.log(this.inCharge.length);
    for(var i = 0; i < this.inCharge.length; i++){
    this.person = this.inCharge[i].split(" ");
    this.rest.searchPerson(this.person).subscribe((res3: any) => {
      if(res3.message == "No hay registros"){
        this.correct = this.correct + '1';
        this.correctIC = this.correctIC + '1';
        console.log('que pedo');
      }else{
        this.toastr.error('No se encontro a la persona');
        this.correct = this.correct + '0';
        this.correctIC = this.correctIC + '0';
        this.toastr.error('No se encontro al encargado');
        console.log(this.correct);
      }
    });
    }
  }

  searchPerson4(){
    for(var i = 0; i < this.son.length; i++){
      this.person = this.son[i].split(" ");
      this.rest.searchPerson(this.person).subscribe((res3: any) => {
        if(res3.message == "No hay registros"){
          this.correct = this.correct + '1';
          this.correctS = this.correctS + '1';
        }else{
          this.toastr.error('No se encontro a la persona');
          this.correct = this.correct + '0';
          this.correctS = this.correctS + '0';
          this.toastr.error('No se encontro al hijo');
          console.log(this.correct);
        }
      });
    }
  }

  updateFamily(){
    console.log();
    this.rest.updateFamily(this.id, this.family).subscribe((res2) => {
      console.log(res2);
    });
  }

  cambio(){
    if(this.botonFa == "Crear familia"){
      this.tituloFa = "Buscar familia";
      this.preguntaFa = "¿Aún no tienes familia?";
      this.botonFa = "Buscar familia";
    }else{
      this.tituloFa = "Agregar familia";
      this.preguntaFa = "¿Ya tienes familia?";
      this.botonFa = "Crear familia";
    }
  }

  addInCharge(){
    this.inCharge.push(this.select3);
    console.log(this.inCharge); 
    this.search3 = '';
  }

  addSon(){
    this.son.push(this.select4);
    console.log(this.son); 
    this.select4 = '';
  }
}
