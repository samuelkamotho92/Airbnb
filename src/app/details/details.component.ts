import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import { Housinglocation } from '../housinglocation';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  template: `
<article>
    <img class="listing-photo" [src]="housingLocation?.photo"
      alt="Exterior photo of {{housingLocation?.name}}"/>
    <section class="listing-description">
      <h2 class="listing-heading">{{housingLocation?.name}}</h2>
      <p class="listing-location">{{housingLocation?.city}}, {{housingLocation?.state}}</p>
    </section>
    <section class="listing-features">
      <h2 class="section-heading">About the house</h2>
      <ul>
        <li>Units available: {{housingLocation?.availableUnits}}</li>
        <li>Free wifi: {{housingLocation?.wifi}}</li>
        <li>Offer laundry: {{housingLocation?.laundry}}</li>
        <li>Free parking: {{housingLocation?.parking}}</li>
        <li>Does have kitchen: {{housingLocation?.kitchen}}</li>
        <li>Contain bathroom: {{housingLocation?.bathroom}}</li>
        <li>House Rent: {{housingLocation?.price}}</li>
        <li>Description: {{housingLocation?.description}}</li>
        <li>Type: {{housingLocation?.type}}</li>
      </ul>
    </section>
    <section class="listing-apply">
<h2 class="section-heading">Book the house</h2>
<form [formGroup]="applyForm" (submit)="submitApplication()">
<label for="first-name">
First Name
</label>
<input id="first-name" type="text" formControlName="firstName"/>
<label for="last-name">
Last Name
</label>
<input id="last-name" type="text" formControlName="lastName"/>
<label for="email">
Email
</label>
<input id="email" type="email" formControlName="email"/>
<label for="phoneNumber">
Phone Number
</label>
<input id="phoneNumber" type="phoneNumber" formControlName="phoneNumber" />
<button type="submit" class="primary">Book now</button>
</form>
    </section>
  </article>
  `,
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  houseLocationId = -1;
  housingService: HousingService = inject(HousingService);
  housingLocation: Housinglocation | undefined;

  //Form object
  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    phoneNumber: new FormControl('')
  })

  constructor() {
    this.houseLocationId = Number(this.route.snapshot.params['id']);
    //pass the details of the specific house location;
    this.housingService.getHousingLocation(this.houseLocationId).then((data) => {
      this.housingLocation = data
    });
  }

  submitApplication() {
    this.housingService.submitApplication(
      this.applyForm.value.firstName ?? "",
      this.applyForm.value.lastName ?? "",
      this.applyForm.value.email ?? "",
      this.applyForm.value.phoneNumber ?? ""
    );
  }
}
