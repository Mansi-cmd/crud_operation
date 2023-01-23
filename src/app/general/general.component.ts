import { Component } from '@angular/core';
import { NewsapiservicesService } from '../service/newsapiservices.service';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent {

  constructor(private service: NewsapiservicesService) { }

  //display
  generalDisplay: any = [];

  ngOnInit() {

    this.service.general().subscribe((data) => {
      console.log(data);
      this.generalDisplay = data.articles;
    })

  }
}
