import { Component, OnInit } from '@angular/core';
import { RedesService } from '../../services/redes.service';
import { Redes } from '../../models/redes';
import { RouterModule, Router } from '@angular/router';
@Component({
  selector: 'app-listar-redes',
  templateUrl: './listar-redes.component.html',
  styleUrls: ['./listar-redes.component.css']
})
export class ListarRedesComponent implements OnInit {
  redes: Redes;
  nombres = [];
  search1: string = '';
  idRedes = [];
  results = [];
  constructor(public rest: RedesService,public router: Router) { 

  }

  ngOnInit() {
    this.getRedes();
  }

  getRedes(){
    this.rest.getRedes().subscribe(res =>{
      this.redes = res.redes;
      // console.log(res.redes._id);
      // console.log(idredes);
      // this.redes.career
      res.name.forEach(element => {
        this.nombres.push(element);
      });
    });
  }
  update(red){
    console.log(red._id)
    this.router.navigateByUrl('redes');
    
  }


}
