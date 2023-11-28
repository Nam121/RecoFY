// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { HomeComponent } from './components/home/home.component';
// import { TrailerComponent } from './components/trailer/trailer.component';
// import { ReviewComponent } from './components/review/review.component';

// const routes: Routes = [
//   {
//     path: '',
//     component: HomeComponent,
//   },
//   {
//     path: 'trailer/:imdbId',
//     component: TrailerComponent,
//   },
//   {
//     path: 'review/:imdbId',
//     component: ReviewComponent,
//   },
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TrailerComponent } from './components/trailer/trailer.component';
import { ReviewComponent } from './components/review/review.component';
import { LoginComponent } from './login/login.component';
import { MainPageComponent } from './components/main-page/main-page.component';

import { BookListComponent } from './book-list/book-list.component';
import { ScienceFictionComponent } from './subject/science-fiction/science-fiction.component';
import { HumanAlienEncountersComponent } from './subject/human-alien-encounters/human-alien-encounters.component';
import { AdventureStoriesComponent } from './subject/adventure-stories/adventure-stories.component';
import { FantasyFictionComponent } from './subject/fantasy-fiction/fantasy-fiction.component';
import { TimeTravelComponent } from './subject/time-travel/time-travel.component';
import { YoungAdultFictionComponent } from './subject/young-adult-fiction/young-adult-fiction.component';
import { LoveStoriesComponent } from './subject/love-stories/love-stories.component';
import { RomanceComponent } from './subject/romance/romance.component';
import { FrontierAndPioneerLifeComponent } from './subject/frontier-and-pioneer-life/frontier-and-pioneer-life.component';
import { HistoricalFictionComponent } from './subject/historical-fiction/historical-fiction.component';
import { DystopiasComponent } from './subject/dystopias/dystopias.component';
import { ThrillersSuspenseComponent } from './subject/thrillers-suspense/thrillers-suspense.component';
import { EmployeeListComponent } from './EMP/employee-list/employee-list.component';
import { CreateEmployeeComponent } from './EMP/create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './EMP/update-employee/update-employee.component';
import { EmployeeDetailsComponent } from './EMP/employee-details/employee-details.component';



const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'main-page', component: MainPageComponent },
  { path: 'books', component: BookListComponent },
 
 
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'trailer/:imdbId',
    component: TrailerComponent,
  },
  {
    path: 'review/:imdbId',
    component: ReviewComponent,
  },
  { path: 'subject/science-fiction', component: ScienceFictionComponent },
  { path: 'subject/human-alien-encounters', component: HumanAlienEncountersComponent },
  { path: 'subject/adventure-stories', component: AdventureStoriesComponent },
  { path: 'subject/fantasy-fiction', component: FantasyFictionComponent },
  { path: 'subject/time-travel', component: TimeTravelComponent },
  { path: 'subject/young-adult-fiction', component: YoungAdultFictionComponent },
  { path: 'subject/love-stories', component: LoveStoriesComponent },
  { path: 'subject/romance', component: RomanceComponent },
  { path: 'subject/frontier-and-pioneer-life', component: FrontierAndPioneerLifeComponent },
  { path: 'subject/historical-fiction', component: HistoricalFictionComponent },
  { path: 'subject/dystopias', component: DystopiasComponent },
  { path: 'subject/thrillers-suspense', component: ThrillersSuspenseComponent },
  {path:'employees',component:EmployeeListComponent},
  {path:'create-employee',component:CreateEmployeeComponent},
  {path:'update-employee/:id',component:UpdateEmployeeComponent},
  {path:'employee-details/:id',component:EmployeeDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

  
          