import { Component, OnInit, Renderer2, ElementRef, ViewChild } from '@angular/core';
import { Restaurant, RestaurantMenu } from '../model/restaurant';
import { Restaurants } from '../model/mock-restaurants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adding',
  templateUrl: './adding.component.html',
  styleUrls: ['./adding.component.css']
})
export class AddingComponent implements OnInit {

  @ViewChild('menuList') div: ElementRef;
  constructor(private router: Router, private renderer: Renderer2) { }

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
    console.log(data)
  }
  index = 1;
  addMenu() {
    const p: HTMLParagraphElement = this.renderer.createElement('p');
    p.innerHTML =
      `菜單 ${this.index} :<input type="text" name="menu_${this.index}" ngModel> 價錢 :<input type="text" name="price_${this.index}" ngModel>`;
    this.index++;
    this.renderer.appendChild(this.div.nativeElement, p);
  }
}
