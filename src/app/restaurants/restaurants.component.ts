import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../model/restaurant';
import { Restaurants } from '../model/mock-restaurants';


@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {

  constructor() { }

  restaurants = Restaurants;


  onSelect(restaurant: Restaurant): void {
  alert(restaurant.name);
  }

  changeEven(even) {
    console.log(even);

    }

  ngOnInit() {

  }

}

