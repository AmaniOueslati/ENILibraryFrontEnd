import { Component } from '@angular/core';
import { SharedServiceService } from 'src/app/services/shared-service.service';

@Component({
  selector: 'app-visitors',
  templateUrl: './visitors.component.html',
  styleUrls: ['./visitors.component.css']
})
export class VisitorsComponent {
  imagePath: string = 'assets/images/enicar3.PNG';
  selecteSection: string = '';

  constructor(private sharedService: SharedServiceService) {}

  saveSection(value: string) {
    console.log("La valeur sélectionnée est :", value);
    this.selecteSection = value; 
  }
}

