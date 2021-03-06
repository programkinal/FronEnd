import { FamilyComponent } from './Components/family/family.component';
import { CareerComponent } from './Components/career/career.component';


import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UnitsComponent } from './components/units/units.component';
import { CoursesComponent } from './Components/courses/courses.component';
import { CoursesListComponent } from './Components/courses-list/courses-list.component';
import { CareersListComponent } from './Components/careers-list/careers-list.component';
import { PeopleComponent } from './Components/people/people.component';
import { HomeComponent } from './Components/home/home.component';
import { RedesComponent } from './Components/redes/redes.component';
import { InstructoresComponent } from './Components/instructores/instructores.component';
import { ListInstructorComponent } from './Components/list-instructor/list-instructor.component';
import { ListarRedesComponent } from './Components/listar-redes/listar-redes.component';
import { AssingmentComponent } from './Components/assingment/assingment.component';
import { AssignmentListComponent } from './Components/assignment-list/assignment-list.component';
import { EnrollInstructorComponent } from './Components/enroll-instructor/enroll-instructor.component';
import { EnrollStudentComponent } from './Components/enroll-student/enroll-student.component';
import { AssignmentInstructorCourseComponent } from './Components/assignment-instructor-course/assignment-instructor-course.component';
import { ListAssignmentInstructorCourseComponent } from './Components/list-assignment-instructor-course/list-assignment-instructor-course.component';
import { InscriptionComponent } from './Components/inscription/inscription.component';
import { LoginComponent } from './Components/login/login.component';
import { CreateUserComponent } from './Components/create-user/create-user.component';
import { AuthGuard } from './guards/auth.guard';
import { UsersComponent } from './Components/users/users.component';
import { from } from 'rxjs';
// import { AddCourseToNetworkComponent } from './Components/add-course-to-network/add-course-to-network.component'
// import { ListCourseToNetworkComponent } from './Components/list-course-to-network/list-course-to-network.component'


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'List-Redes', component: ListarRedesComponent, canActivate:[AuthGuard]},
  {path: 'redes/:id', component: RedesComponent, canActivate:[AuthGuard]},
  {path: 'listInstructor', component: ListInstructorComponent, canActivate:[AuthGuard]},
  {path: 'instructores/:id', component: InstructoresComponent, canActivate:[AuthGuard]},
  {path: 'Save-People', component: PeopleComponent, canActivate:[AuthGuard]},
  {path: 'Save-Units-Academic', component: UnitsComponent, canActivate:[AuthGuard]},
  {path: 'Save-Career-Educative', component: CareerComponent, canActivate:[AuthGuard]},
  {path: 'Save-Course', component: CoursesComponent, canActivate:[AuthGuard]},
  {path: 'List-Course', component: CoursesListComponent, canActivate:[AuthGuard]},
  {path: 'Add-family', component: FamilyComponent, canActivate:[AuthGuard]},
  {path: 'List-Career', component: CareersListComponent, canActivate:[AuthGuard]},
  {path: 'Save-assignment-Instructor-Course', component: AssignmentInstructorCourseComponent, canActivate:[AuthGuard]},
  {path: 'List-assignment-Instructor-Course', component: ListAssignmentInstructorCourseComponent, canActivate:[AuthGuard]},
  {path: 'Save-assingment', component: AssingmentComponent, canActivate:[AuthGuard]},
  {path: 'List-Assignment', component: AssignmentListComponent, canActivate:[AuthGuard]},
  {path: 'Enroll-Instructor', component: EnrollInstructorComponent, canActivate:[AuthGuard]},
  {path: 'Enroll-Student', component: EnrollStudentComponent, canActivate:[AuthGuard]},
  {path: 'Inscription', component: InscriptionComponent, canActivate:[AuthGuard]},
  {path: 'Login', component: LoginComponent},
  {path: 'Create-User', component: CreateUserComponent},
  {path: 'Users', component: UsersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
