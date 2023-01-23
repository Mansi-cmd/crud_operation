import { Component } from '@angular/core';
import { NewsapiservicesService } from '../service/newsapiservices.service';


@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent {
  constructor(private service: NewsapiservicesService) { }

  //display
  sportsDisplay: any = [];

  ngOnInit() {

    this.service.sports().subscribe((data) => {
      console.log(data);
      this.sportsDisplay = data.articles;
    })

  }

}
