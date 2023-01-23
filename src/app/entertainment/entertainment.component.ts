import { Component } from '@angular/core';
import { NewsapiservicesService } from '../service/newsapiservices.service';

@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.css']
})
export class EntertainmentComponent {

  constructor(private service: NewsapiservicesService) { }

  //display
  entertainmentDisplay: any = [];

  ngOnInit() {

    this.service.entertainment1().subscribe((data) => {
      console.log(data);
      this.entertainmentDisplay = data.articles;
    })

  }
}
