import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import {RecipeService} from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
  providers:[RecipeService]
})
export class RecipeListComponent implements OnInit {

  constructor(private RecipeService:RecipeService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.RecipeService.newRecipe
    .subscribe(
      (recipes:Recipe[])=>{
        this.recipes = recipes;
      })
    this.recipes= this.RecipeService.getRecipes();
  }

  recipes:Recipe[];

  onNewRecipe(){
    this.router.navigate(['new'],{relativeTo:this.route});
  }

}
