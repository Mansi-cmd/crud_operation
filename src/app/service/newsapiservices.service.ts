import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {
  technology() {
    throw new Error('Method not implemented.');
  }
  entertainment() {
    throw new Error('Method not implemented.');
  }
  education() {
    throw new Error('Method not implemented.');
  }
  constructor(private http:HttpClient) { }

//newsapiurl
newsApiUrl = "https://newsapi.org/v2/top-headlines?country=in&apiKey=9a7ff1bfc8a4473aa90e2395df445af9";

//technewsapiurl
techNewsApiUrl = "https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=9a7ff1bfc8a4473aa90e2395df445af9";

//sportsapiurl
sportsApiUrl = "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=9a7ff1bfc8a4473aa90e2395df445af9";

//educationapiurl
educationApiUrl ="https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=9a7ff1bfc8a4473aa90e2395df445af9";

//generalapiurl
generalApiUrl ="https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=9a7ff1bfc8a4473aa90e2395df445af9";

//technologyapiurl
technologyApiUrl ="https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=9a7ff1bfc8a4473aa90e2395df445af9";

//entertainmentapiurl
entertainmentApiUrl="https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=9a7ff1bfc8a4473aa90e2395df445af9";
//topheading()
topHeading():Observable<any>
{
  return this.http.get(this.newsApiUrl);
}
//technews()
techNews():Observable<any>
{
return this.http.get(this.techNewsApiUrl);
}
//sports()
sports():Observable<any>
{
return this.http.get(this.sportsApiUrl);
}

education1():Observable<any>
{
return this.http.get(this.educationApiUrl);
}
general():Observable<any>
{
return this.http.get(this.generalApiUrl);
}
technology1():Observable<any>
{
return this.http.get(this.technologyApiUrl);
}
entertainment1():Observable<any>
{
  return this.http.get(this.entertainmentApiUrl);
}

}