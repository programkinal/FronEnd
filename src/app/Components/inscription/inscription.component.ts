import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  unitAcademy = '';

  form = new FormGroup({
    person: new FormControl('', Validators.required),
    jornada: new FormControl('', Validators.required),
    career: new FormControl('', Validators.required),
    grade: new FormControl('', Validators.required),
  });
  
  constructor() { }

  ngOnInit() {
  }

}
