import { Component } from '@angular/core';
import { NewsapiservicesService } from '../service/newsapiservices.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
  constructor(private service: NewsapiservicesService) { }

  //display
  educationDisplay: any = [];

  ngOnInit() {

    this.service.education1().subscribe((data) => {
      console.log(data);
      this.educationDisplay = data.articles;
  })

}
}
