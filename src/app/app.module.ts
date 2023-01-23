import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopheadingComponent } from './topheading/topheading.component';
import{HttpClientModule} from '@angular/common/http';
import { NewsapiservicesService } from './service/newsapiservices.service';
import { TechnewsComponent } from './technews/technews.component';
import { SportsComponent } from './sports/sports.component';
import { EducationComponent } from './education/education.component';
import { GeneralComponent } from './general/general.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';

@NgModule({
  declarations: [
    AppComponent,
    TopheadingComponent,
    TechnewsComponent,
    SportsComponent,
    EducationComponent,
    GeneralComponent,
    EntertainmentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [NewsapiservicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
