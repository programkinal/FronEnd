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


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'List-Redes', component: ListarRedesComponent},
  {path: 'redes/:id', component: RedesComponent},
  {path: 'listInstructor', component: ListInstructorComponent},
  {path: 'instructores/:id', component: InstructoresComponent},
  {path: 'Save-People', component: PeopleComponent},
  {path: 'Save-Units-Academic', component: UnitsComponent},
  {path: 'Save-Career-Educative', component: CareerComponent},
  {path: 'Save-Course', component: CoursesComponent},
  {path: 'List-Course', component: CoursesListComponent},
  {path: 'Add-family', component: FamilyComponent},
  {path: 'List-Career', component: CareersListComponent},
  {path: 'Save-assingment', component: AssingmentComponent},
  {path: 'List-Assignment', component: AssignmentListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
