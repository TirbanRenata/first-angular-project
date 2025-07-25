import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalDetailsService } from '../services/personal-details.service';
import { PersonalDetails } from '../models/personal-details';

@Component({
  selector: 'app-right-panel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './right-panel.component.html',
  styleUrl: './right-panel.component.scss'
})
export class RightPanelComponent {
  personalDetails: PersonalDetails = {} as PersonalDetails;
  constructor(
    personalDetailsService: PersonalDetailsService
  ) {
    personalDetailsService.getPersonalDetails().subscribe(result => {
      this.personalDetails = result;
    });
    
    console.log(this.personalDetails);
  }
}
