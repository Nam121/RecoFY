import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { TrailerComponent } from './components/trailer/trailer.component';
import { ReviewComponent } from './components/review/review.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
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

import { CommonModule } from '@angular/common';
import { EmployeeListComponent } from './EMP/employee-list/employee-list.component';
import { CreateEmployeeComponent } from './EMP/create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './EMP/update-employee/update-employee.component';
import { EmployeeDetailsComponent } from './EMP/employee-details/employee-details.component';


@NgModule({
  declarations: [
    
    AppComponent,
    NavbarComponent,
    HomeComponent,
    TrailerComponent,
    ReviewComponent,
    LoginComponent,
    MainPageComponent,
    BookListComponent,
    ScienceFictionComponent,
    HumanAlienEncountersComponent,
    AdventureStoriesComponent,
    FantasyFictionComponent,
    TimeTravelComponent,
    YoungAdultFictionComponent,
    LoveStoriesComponent,
    RomanceComponent,
    FrontierAndPioneerLifeComponent,
    HistoricalFictionComponent,
    DystopiasComponent,
    EmployeeListComponent,
    CreateEmployeeComponent,
    UpdateEmployeeComponent,
    EmployeeDetailsComponent,
  


   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
