import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AssignmentInstructorCourseService } from 'src/app/services/assignment-instructor-course.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { AssignmentInstructorCourse } from 'src/app/models/assignment-instructor-course';
import { Instructor } from 'src/app/models/instructor';
import { Person } from 'src/app/models/person';

@Component({
  selector: 'app-assignment-instructor-course',
  templateUrl: './assignment-instructor-course.component.html',
  styleUrls: ['./assignment-instructor-course.component.css']
})
export class AssignmentInstructorCourseComponent implements OnInit {
  assignment: AssignmentInstructorCourse;
  courses = [];
  nameInstructor: []
  instructoresAdd = []
  instructoresAddString = ''
  form = new FormGroup({
    course: new FormControl('',Validators.required),
    instructor: new FormControl('',Validators.required)
  });
  constructor(private rest: AssignmentInstructorCourseService, private tostr: ToastrService, private params: ActivatedRoute, private routerLink: Router) {
    this.rest.setAssignmentInstructor(this.assignment);
    this.assignment = new AssignmentInstructorCourse('',[]);
    // this.nameInstructor = new Person('','','','','',null,'',null,'','',null,null);
   }

  ngOnInit() {
    this.getCourse();
    this.getInstructor();
  }
  onSubmit(){
    this.assignment.instructor = this.instructoresAdd
    this.rest.setAssignmentInstructor(this.assignment).subscribe(res => {
      if(res.message == 'Error al guardar'){
        this.tostr.error('Error al guardar','Error');
      }else{
        if(res.guardado && res.guardado._id){
          this.tostr.success('Se ha guardado correctamet','Guardar');
          this.routerLink.navigateByUrl('List-assignment-Instructor-Course');
        }else if(res.message == 'El registro ya esta en la base de datos'){
          this.tostr.error('El registro ya esta en la base de datos','Error')
        }else if(res.message == 'Debes de llenar todos los campos'){
          this.tostr.error('Debes de llenar todos los campos','Error');
        }
      }
    })
  }

  getCourse(){
    this.rest.getCourse().subscribe(res =>{
      // console.log(res.course);
      for(let i =0; i<res.course.length; i++){
        this.courses.push(res.course[i]);
      }
    })
  }
  getInstructor(){

    this.rest.getInstructor().subscribe(res =>{
      console.log(res);
      // for(let i =0; i<res.persona.length; i++){
        this.nameInstructor = res.persona
      // }
      
      // console.log(this.nameInstructor)
    })
  }
  addInstructor(){
    console.log(this.instructoresAddString)
    if(this.instructoresAddString == ''){
      console.log('0')
      this.tostr.error('Debe de seleccionar un instructor', 'Error')
    }else
      if(this.assignment.instructor.includes(this.instructoresAddString)){
        console.log('1')
        this.tostr.error('El curso ya ha sido ingresado', 'Error')
      }else{
        console.log('2')
        this.assignment.instructor.push(this.instructoresAddString)
        console.log(this.assignment.instructor)
      }
    

        // this.instructoresAdd.push(this.assignment.instructor)
        // console.log(this.instructoresAdd)

    
  }

}
