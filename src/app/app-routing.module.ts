import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EducationComponent } from './education/education.component';
import { SportsComponent } from './sports/sports.component';
import { TechnewsComponent } from './technews/technews.component';
import { TopheadingComponent } from './topheading/topheading.component';
import { GeneralComponent } from './general/general.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';

const routes: Routes = [
  {path:'',component:TopheadingComponent},//Home
  {path:'tech',component:TechnewsComponent},//Tech news
  {path:'sports',component:SportsComponent}, // SportNews
  {path:'education',component:EducationComponent},//Education
  {path:'general',component:GeneralComponent},//General
  {path:'entertainment',component:EntertainmentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
