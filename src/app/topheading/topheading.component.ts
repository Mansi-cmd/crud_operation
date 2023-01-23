import { Component,OnInit } from '@angular/core';
import { NewsapiservicesService } from '../service/newsapiservices.service';

@Component({
  selector: 'app-topheading',
  templateUrl: './topheading.component.html',
  styleUrls: ['./topheading.component.css']
})
export class TopheadingComponent implements OnInit  {
  constructor(private service:NewsapiservicesService) { }
  //display
  topheadingDisplay:any = [];

  ngOnInit() {

    this.service.topHeading().subscribe((data) => {
      console.log(data);
      this.topheadingDisplay = data.articles;
  })

}
 
}
