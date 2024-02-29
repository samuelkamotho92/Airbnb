import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Housinglocation } from '../housinglocation';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  template: `
    <section class="listing">
     <img  class="listing-photo" [src]="housingLocation.photo" alt="Exterior photo {{housingLocation.name}}"/>
     <h2 class="listing-heading">{{housingLocation.name}}</h2>
     <p class="listing-location">{{ housingLocation.city}}, {{housingLocation.state }}</p>
     <div class="details">
       <p class="listing-type">Type: {{housingLocation.type}}</p>
       <a [routerLink]="['/details',housingLocation.id]">Learn More</a>
     </div>
  
    </section>
  `,
  styleUrl: './housing-location.component.css'
})
export class HousingLocationComponent {
  @Input() housingLocation!: Housinglocation;
}
