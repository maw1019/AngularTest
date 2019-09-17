import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Restaurants, Menus } from '../model/mock-restaurants';
import { Router } from '@angular/router';
import { FormGroup, FormArray, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-adding',
  templateUrl: './adding.component.html',
  styleUrls: ['./adding.component.css']
})
export class AddingComponent implements OnInit {
  restaurantForm: FormGroup;

  @ViewChild('menuList') div: ElementRef;

  constructor(private router: Router) { };
  MenuInputForm: FormGroup;
  boolAddMenu: boolean = false;

  get restaurantProduct() {
    return this.restaurantForm.get('restaurantProduct') as FormArray;
  }

  get restaurantPrice() {
    return this.restaurantForm.get('restaurantPrice') as FormArray;
  }

  canAddMenu(index) {
    let ResPro = this.restaurantForm.get('restaurantProduct').value;
    let ResPri = this.restaurantForm.get('restaurantPrice').value;
    if (ResPro.length === 0 && ResPri.length === 0) {
      this.boolAddMenu = false;
    } else if (!ResPro[index] || !ResPri[index]) {
      this.boolAddMenu = true;
    } else {
      this.boolAddMenu = false;
    }
  }
  addMenu() {
    this.restaurantProduct.push(new FormControl('', Validators.required));
    this.restaurantPrice.push(new FormControl('', Validators.required));
    this.boolAddMenu = true;
  }

  deleteMenu(i) {
    let ResPro = this.restaurantForm.get('restaurantProduct').value;
    let ResPri = this.restaurantForm.get('restaurantPrice').value;
    this.restaurantProduct.removeAt(i);
    this.restaurantPrice.removeAt(i);
    if (ResPro.length === 0 && ResPri.length === 0) {
      this.boolAddMenu = false;
    }
  }

  ngOnInit() {
    this.restaurantForm = new FormGroup({
      restaurantName: new FormControl('', Validators.required),
      restaurantAddress: new FormControl('', Validators.required),
      restaurantTel: new FormControl('', Validators.required),
      restaurantProduct: new FormArray([], Validators.required),
      restaurantPrice: new FormArray([], Validators.required)
    });
  }

  onAddRestaurant(data: any): void {
    let restaurants = Restaurants.length + 1;
    let addRestaurantDate =
    {
      id: restaurants,
      address: data.restaurantAddress,
      name: data.restaurantName,
      telphone: data.restaurantTel
    }
    let addMenuData = {
      id: restaurants,
      menu: []
    }
    for (let j = 0; j < data.restaurantProduct.length; j++) {
      addMenuData.menu.push({ price: data.restaurantPrice[j], name: data.restaurantProduct[j] })
    }
    Menus.push(addMenuData);
    Restaurants.push(addRestaurantDate);
    this.router.navigate(['']);
  }
}
