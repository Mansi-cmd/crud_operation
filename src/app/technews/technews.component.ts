import { Component } from '@angular/core';
import { NewsapiservicesService } from '../service/newsapiservices.service';

@Component({
  selector: 'app-technews',
  templateUrl: './technews.component.html',
  styleUrls: ['./technews.component.css']
})
export class TechnewsComponent {

  constructor(private service:NewsapiservicesService) { }
  //display
  TechNewsDisplay:any = [];

  ngOnInit() {

    this.service.techNews().subscribe((data) => {
      console.log(data);
      this.TechNewsDisplay = data.articles;
  })

}
}
