import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { PeopleComponent } from './Components/people/people.component';
import { Person } from './models/person';
import {ToastrModule} from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
//Services
import { PersonServiceService } from './services/person-service.service';
import { AcademicUnitsService } from './services/academic-units.service';
import { CareerService } from './services/career.service';

//Connection
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { UnitsComponent } from './components/units/units.component';
import { from } from 'rxjs';
import { CareerComponent } from './Components/career/career.component';
import { CoursesComponent } from './Components/courses/courses.component';
import { CoursesListComponent } from './Components/courses-list/courses-list.component';
import { CareersListComponent } from './Components/careers-list/careers-list.component';
import { FamilyComponent } from './Components/family/family.component';
import { PruebaComponent } from './Components/prueba/prueba.component';
import { HomeComponent } from './Components/home/home.component';
import { RedesComponent } from './Components/redes/redes.component';
import { InstructoresComponent } from './Components/instructores/instructores.component';
import { ListInstructorComponent } from './Components/list-instructor/list-instructor.component';
import { ListarRedesComponent } from './Components/listar-redes/listar-redes.component';
import { FilterCoursePipe } from './pipes/filter-course.pipe';
import { AssingmentComponent } from './Components/assingment/assingment.component';
import { AssignmentListComponent } from './Components/assignment-list/assignment-list.component';
import { EnrollInstructorComponent } from './Components/enroll-instructor/enroll-instructor.component';
import { EnrollStudentComponent } from './Components/enroll-student/enroll-student.component';
import { AssignmentInstructorCourseComponent } from './Components/assignment-instructor-course/assignment-instructor-course.component';
import { ListAssignmentInstructorCourseComponent } from './Components/list-assignment-instructor-course/list-assignment-instructor-course.component';
import { InscriptionComponent } from './Components/inscription/inscription.component';
import { LoginComponent } from './Components/login/login.component';
import { ListCourseToNetworkComponent } from './Components/list-course-to-network/list-course-to-network.component';
import { AddCourseToNetworkComponent } from './Components/add-course-to-network/add-course-to-network.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PeopleComponent,
    UnitsComponent,
    CareerComponent,
    CoursesComponent,
    CoursesListComponent,
    CareersListComponent,
    FamilyComponent,
    PruebaComponent,
    HomeComponent,
    RedesComponent,
    InstructoresComponent,
    ListInstructorComponent,
    ListarRedesComponent,
    FilterCoursePipe,
    AssingmentComponent,
    AssignmentListComponent,
    EnrollInstructorComponent,
    EnrollStudentComponent,
    AssignmentInstructorCourseComponent,
    ListAssignmentInstructorCourseComponent,
    InscriptionComponent,
    LoginComponent,
    ListCourseToNetworkComponent,
    AddCourseToNetworkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [
    PersonServiceService,AcademicUnitsService, CareerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
