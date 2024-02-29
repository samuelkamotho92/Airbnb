import { Component, inject } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { CommonModule } from '@angular/common';
import { Housinglocation } from '../housinglocation';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HousingLocationComponent
  ],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by kenyan towns" #filter>
        <button class="primary" type="button" (click)="filterResults(filter.value)">Search</button>
      </form>
    </section>
    <section class="results">
    <app-housing-location
  *ngFor="let housingLocation of filteredLocationList"
  [housingLocation]="housingLocation">
</app-housing-location>
    </section>
  `,
  styleUrl: './home.component.css'
})
export class HomeComponent {
  housingLocationList: Housinglocation[] = [];
  filteredLocationList: Housinglocation[] = [];
  housingService: HousingService = inject(HousingService);
  constructor() {
    //call the function when component launches and then updated the house List
    this.housingService.getAllHousingLocations().then((data: Housinglocation[]) => {
      this.housingLocationList = data;
      this.filteredLocationList = data;
    })
  }
  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.housingLocationList;
      return;
    }
    this.filteredLocationList = this.housingLocationList.filter(
      houselocation => houselocation?.city.toLowerCase().includes(text.toLowerCase())
    );
  }
}
