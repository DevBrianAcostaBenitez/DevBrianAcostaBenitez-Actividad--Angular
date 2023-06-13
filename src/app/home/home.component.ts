import { Component } from '@angular/core';
import { HousingLocation } from '../housinglocation';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  housingLocation: HousingLocation = {
    id: 9999,
    name: 'Test Home',
    city: 'Test city',
    state: 'ST',
    photo: 'assets/example-house.png',
    availableUnits: 99,
    wifi: true,
    laundry: false,
  };
}