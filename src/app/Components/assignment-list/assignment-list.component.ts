import { Component, OnInit } from '@angular/core';
import { AssignmentServicesService } from '../../services/assignment-services.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute} from '@angular/router';
import { Router } from '@angular/router';
import { Assignment } from 'src/app/models/assignment';


@Component({
  selector: 'app-assignment-list',
  templateUrl: './assignment-list.component.html',
  styleUrls: ['./assignment-list.component.css']
})
export class AssignmentListComponent implements OnInit {
  assignment: Assignment;
  nameCareers = [];
  nameCourses = [];
  nameInstructors = [];
  constructor(public rest: AssignmentServicesService,public router: Router, private tostr: ToastrService) { }

  ngOnInit() {
    this.getAssigment();
  }

  getAssigment(){
    this.rest.getAssignment().subscribe(res =>{
      console.log(res.asignaciones)
      this.assignment = res.asignaciones;
      // res.career.forEach(namecareer => {
      //   this.nameCareers.push(namecareer);
      // });
      // res.course.forEach(namecourses =>{
      //   this.nameCourses.push(namecourses)
      // });
      // res.instructor.forEach(nameInstructor =>{
      //   this.nameInstructors.push(nameInstructor)
      // }); 
      // console.log(this.nameCareers)
    });
  }
  

}
