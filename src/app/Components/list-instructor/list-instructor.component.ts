import { Component, OnInit } from '@angular/core';
import { Instructor } from '../../models/instructor';
import { InstructorService } from '../../services/instructor.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-list-instructor',
  templateUrl: './list-instructor.component.html',
  styleUrls: ['./list-instructor.component.css']
})
export class ListInstructorComponent implements OnInit {
  instructor: Instructor;
  search: String;
  search1: String;
  instructores = [];
  results = [];
  constructor(public rest: InstructorService, public router: Router, private tostr: ToastrService) { }

  ngOnInit() {
    this.getInstructor();
  }
  getInstructor(){
    this.rest.getInstructor().subscribe(res =>{
      this.instructores = res.instructor;
      console.log(this.instructores)
    });
  }

  /*onSubmit(){
    this.rest.searchInstructor(this.search, this.search1).subscribe((res)=>{
      if(!res){
        console.log();
      }else{
        this.results = res.results;
        console.log(res);
      }
    });
  }*/

  update(instructor){
    this.router.navigateByUrl('instructores/'+ instructor._id);
    console.log(instructor._id)
  }

  delete(instructor){
    this.rest.deleteInstructor(instructor._id).subscribe(res =>{
      if(res.message == 'Error al eliminar'){
        this.tostr.error('No se pudo eliminar', 'Error');
      }else{
        this.tostr.success('Se elimino correctamente','Eliminado')
        this.getInstructor();
      }
    })
  }
}
