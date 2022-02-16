import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import {Recipe} from './recipe.model';
@Injectable({
  providedIn: 'root'
})
export class RecipeService {

    public newRecipe = new EventEmitter<Recipe[]>();

 // recipesChanged = new Subject<Recipe[]>();

  constructor() { }

  recipes:Recipe[]=[
    new Recipe('Hamburger','A hamburger (also burger for short) is a sandwich consisting of one or more cooked patties of ground meat, usually beef, placed inside a sliced bread roll or bun. The patty may be pan fried, grilled, smoked or flame broiled.',
    'https://thumbs.dreamstime.com/b/big-burger-isolated-white-43062448.jpg'),
      new Recipe('Pizza','The word "pizza" first appeared in a Latin text from the town of Gaeta, then still part of the Byzantine Empire, in 997 AD; the text states that a tenant of certain property is to give the bishop of Gaeta duodecim pizze.',
    'https://media.istockphoto.com/photos/pizza-picture-id184946701?k=20&m=184946701&s=612x612&w=0&h=LRc4BfIMzP3QW9QKr5eria66F1ZeV2EY8xXeva-E6io='),
    new Recipe('Maggi','Maggi ( pronounced  or pronounced   is an international brand of seasonings, instant soups, and noodles that originated in Switzerland in the late 19th century.',
    'https://i.ytimg.com/vi/eVuMitZk3xc/maxresdefault.jpg'),
    new Recipe('Pastas','Shaped pastas are available in many different sizes and specific shapes. They include shapes that resemble shells, bow ties, spirals, snails, wheels and radiators.'
    ,'https://images.unsplash.com/photo-1551183053-bf91a1d81141?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHBhc3RhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'),
  
     
  ];

  getRecipes(){
    return this.recipes.slice();
  }

  getRecipe(index:number){
    return this.recipes[index];
  }

  addNewRecipe(recipe:Recipe){
    this.recipes.push(recipe);
   // this.recipesChanged.next(this.recipes.slice());
  }
  
  updateRecipe(index:number, newRecipe:Recipe){
    this.recipes[index]= newRecipe;
    //this.recipesChanged.next(this.recipes.slice());
    this.newRecipe.emit(this.recipes.slice());
  }

  deleteRecipe(index:number){
    this.recipes.splice(index,1);
    this.newRecipe.emit(this.recipes.slice());
  }


}
