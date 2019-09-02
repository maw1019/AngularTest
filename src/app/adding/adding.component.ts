import { Component, OnInit } from '@angular/core';
import { Restaurant, RestaurantMenu } from '../model/restaurant';
import { Restaurants } from '../model/mock-restaurants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adding',
  templateUrl: './adding.component.html',
  styleUrls: ['./adding.component.css']
})
export class AddingComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onAddRestaurant(data) {
    let restaurants = Restaurants.length + 1;
    let addRestaurantDate = 
    {
      id: restaurants,
      address: data.restaurantAddress,
      name: data.restaurantName,
      telphone: data.restaurantTel
    }
    Restaurants.push(addRestaurantDate);
    this.router.navigate(['']);
  };
}
