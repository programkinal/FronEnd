import { Component, OnInit } from '@angular/core';
import { RedesService } from '../../services/redes.service';
import { Redes } from '../../models/redes';
@Component({
  selector: 'app-listar-redes',
  templateUrl: './listar-redes.component.html',
  styleUrls: ['./listar-redes.component.css']
})
export class ListarRedesComponent implements OnInit {
  redes: Redes;
  nombres = [];
  search1: string = '';
  ss = [];
  results = [];
  constructor(public rest: RedesService) { 

  }

  ngOnInit() {
    this.getRedes();
  }

  getRedes(){
    this.rest.getRedes().subscribe(res =>{
      this.redes = res.redes;
      console.log(this.redes);
      // this.redes.career
      res.name.forEach(element => {
        this.nombres.push(element);
      });
    });
  }


}
