import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';
import { Tag } from 'src/app/shared/models/Tag';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
  getFoodById(id:number): Foods{
     return this.getAll().find(food=>food.id==id)!;
  }
  getAllFoodByTag(tag:string):Foods[]{
    return tag == 'All'?this.getAll():this.getAll().filter(food=> food.tags?.includes(tag));
    
    // if(tag == 'All')
    // return this.getAll()
    // else
    // return this.getAll().filter(food=> food.tags?.includes(tag))
  }
  getAllTag():Tag[]{
    return[
      {name: 'All',count:10},
      {name:'FastFood',count:7},
      {name:'Pizza', count:2},
      {name:'Lunch', count:8},
      {name:'Burger', count:2},
      {name:'Meatballs', count:1}
    ]
  }
  getAll():Foods[]{
    return [
      {
        id:1,
        name:'Burger',
        cookTime:'10-20',
        price:10,
        favorite:false,
        origins:['italy'],
        star:4.5,
        imageUrl:'assets/food-1.jpg',
        tags:['FastFood','Burger']
      },
      {
        id:2,
        name:'Meatballs',
        cookTime:'15-25',
        price:200,
        favorite:false,
        origins:['french','middle-east'],
        star:4.5,
        imageUrl:'assets/food-2.jpg',
        tags:['FastFood','Meatballs','Lunch']
      },
      {
        id:3,
        name:'Pizza',
        cookTime:'20-30',
        price:150,
        favorite:false,
        origins:['italy'],
        star:4.5,
        imageUrl:'assets/food-3.jpg',
        tags:['FastFood','Pizza','Lunch']
      },
      {
        id:4,
        name:'French Fries',
        cookTime:'10-20',
        price:50,
        favorite:false,
        origins:['american'],
        star:4.5,
        imageUrl:'assets/food-4.jpg',
        tags:['FastFood','Fries','Lunch']
      },
      {
        id:5,
        name:'Spicy Noodles',
        cookTime:'20-30',
        price:180,
        favorite:false,
        origins:['italy'],
        star:4.5,
        imageUrl:'assets/food-5.jpg',
        tags:['FastFood','Noodles']
      },
      {
        id:6,
        name:'Sandwich',
        cookTime:'10-20',
        price:40,
        favorite:false,
        origins:['indian','american'],
        star:4.5,
        imageUrl:'assets/food-6.jpg',
        tags:['Lunch']
      },
      {
        id:7,
        name:'Spicy Pizza',
        cookTime:'30-40',
        price:250,
        favorite:false,
        origins:['italy','french'],
        star:4.5,
        imageUrl:'assets/food-7.jpg',
        tags:['FastFood','Pizza','Lunch']
      },
      {
        id:8,
        name:'Spicy Burger',
        cookTime:'20-30',
        price:100,
        favorite:false,
        origins:['indian','italy'],
        star:4.5,
        imageUrl:'assets/food-8.jpg',
        tags:['FastFood','Burger','Lunch']
      },
      {
        id:9,
        name:'Chinese Balls',
        cookTime:'10-20',
        price:100,
        favorite:false,
        origins:['chinese'],
        star:4.5,
        imageUrl:'assets/food-9.jpg',
        tags:['Lunch']
      },
      {
        id:10,
        name:'Noodles',
        cookTime:'25-30',
        price:105,
        favorite:false,
        origins:['chinese','french'],
        star:4.5,
        imageUrl:'assets/food-10.jpg',
        tags:['Noodles','Lunch']
      }
    ]
  }
}
