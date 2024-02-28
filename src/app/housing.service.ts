import { Injectable } from '@angular/core';
import { Housinglocation } from './housinglocation';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  housingLocationList: Housinglocation[] = [
    {
      id: 1,
      name: "Garden Estate",
      city: "Nairobi",
      state: "Kenya",
      photo: "https://cdn.standardmedia.co.ke/images/thursday/cfm2s0aro8yl60a58e0393d5e.jpg",
      availableUnits: 20,
      wifi: true,
      parking: true,
      laundry: true,
      kitchen: true,
      bathroom: true,
      bedroom: false,
      price: 10000,
      description: "This is the best place to live in Ngara Nairobi",
      type: "Bedsitter"
    },
    {
      id: 2,
      name: "Blue Valley",
      city: "Nyeri",
      state: "Kenya",
      photo: "https://thebrands.co.ke/wp-content/uploads/2020/11/bedsitter-house.jpg",
      availableUnits: 10,
      wifi: true,
      parking: false,
      laundry: false,
      kitchen: true,
      bathroom: true,
      bedroom: false,
      price: 5500,
      description: "Affordable Best sitters in  Nyeri Town",
      type: "Bedsitter"
    },
    {
      id: 3,
      name: "Chacka Estate",
      city: "Nyeri",
      state: "Kenya",
      photo: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/462119091.jpg?k=a072589c82e45257ec3d921a0bf16c71dcf3d36a021a423d23a51feaabcfe62a&o=&hp=1",
      availableUnits: 15,
      wifi: true,
      parking: false,
      laundry: true,
      kitchen: true,
      bathroom: true,
      bedroom: true,
      price: 9000,
      description: "Live at the CBD of Nyeri",
      type: "One bedroom"
    },
    {
      id: 4,
      name: "Umoja Estate",
      city: "Nyeri",
      state: "Kenya",
      photo: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/355023852.jpg?k=9e237e06a29f2fcf9165f882d7960a143bc877e488cdefbd484a529bfa735b6f&o=&hp=1",
      availableUnits: 3,
      wifi: true,
      parking: false,
      laundry: true,
      kitchen: true,
      bathroom: true,
      bedroom: true,
      price: 14000,
      description: "Spacious two bedroom",
      type: "Two bedroom"
    },
    {
      id: 5,
      name: "Queen Estate",
      city: "Nyeri",
      state: "Kenya",
      photo: "https://s3.us-east-2.amazonaws.com/images.propertypro.africa/large/neat-one-bedroom-house-in-umoja-one-cBQOeRqxgcsjKwW2zbIo.jpg",
      availableUnits: 5,
      wifi: true,
      parking: true,
      laundry: true,
      kitchen: true,
      bathroom: true,
      bedroom: true,
      price: 9000,
      description: "Enjoy beautiful view of nyeri bedroom",
      type: "One bedroom"
    }
  ]

  getAllHousingLocations(): Housinglocation[] {
    return this.housingLocationList;
  }
  getHousingLocation(id: number): Housinglocation | undefined {
    return this.housingLocationList.find(housingLocation => housingLocation.id === id);
  }
}