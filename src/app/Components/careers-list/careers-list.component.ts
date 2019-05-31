import { CareerService } from './../../services/career.service';
import { Component, OnInit } from '@angular/core';
import { Career } from '../../models/career';
import { restoreView } from '@angular/core/src/render3';

@Component({
  selector: 'app-careers-list',
  templateUrl: './careers-list.component.html',
  styleUrls: ['./careers-list.component.css']
})
export class CareersListComponent implements OnInit {
  carrera: Career;
  search: String;
  search1: String;
  carreras: [];
  results: [];
  constructor(public rest: CareerService) { }

  ngOnInit() {
    this.getCareer();
  }

  getCareer(){
    this.rest.getCareer().subscribe(res =>{
      this.carrera = res.career;
      console.log(this.carrera)
    });
  }

  onSubmit(){
    this.rest.searchCarrera(this.search, this.search1).subscribe((res) => {
      if(!res){
          console.log();
      }else{
        this.results = res.results;
        console.log(res);
      } 
    });
  }

}