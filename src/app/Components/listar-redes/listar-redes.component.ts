import { Component, OnInit } from '@angular/core';
import { RedesService } from '../../services/redes.service';
import { Redes } from '../../models/redes';
import {  Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
  constructor(public rest: RedesService,public router: Router, private tostr: ToastrService) { 

  }

  ngOnInit() {
    this.getRedes();
  }

  getRedes(){
    this.rest.getRedes().subscribe(res =>{
      this.redes = res.redes;
    });
  }
  update(red){
    this.router.navigateByUrl('redes/'+ red._id);
  }
  delete(red){
    this.rest.deleteRedes(red._id).subscribe(res =>{
      if(res.message == 'No se pudo eliminar'){
        this.tostr.error('No se pudo eliminar', 'Error');
      }else{
        this.tostr.success('Se elimino correctamente','Eliminado')
        this.getRedes();
      }
    })
  }


}
