import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  id:number;
  editMode = false;
  recipeForm: FormGroup;

  constructor(private router:Router, private route:ActivatedRoute, private recipeService:RecipeService) { }

  ngOnInit(): void {
    this.route.params
    .subscribe(
      (params:Params)=>{
        this.id=+params['id'];
        this.editMode = params['id'] != null;  
      }
    )
    this.initForm();
  }
  public initForm(){

    let recipeName = '';
    let recipeDiscription='';
    let recipeImgpath='';

    if(this.editMode){
      const recipe = this.recipeService.getRecipe(this.id);
      recipeName = recipe.name;
      recipeDiscription = recipe.discription;
      recipeImgpath = recipe.imgpath;


    }
    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName,Validators.required),
      'imgpath': new FormControl(recipeImgpath,Validators.required),
      'discription':new FormControl(recipeDiscription,Validators.required)
    })
  }
  onSubmit(){
     if(this.editMode){
      this.recipeService.updateRecipe(this.id,this.recipeForm.value);
      this.router.navigateByUrl('/recipes')
    }
    else{
      this.recipeService.addNewRecipe(this.recipeForm.value);
      this.router.navigateByUrl('/recipes')
    }
  
  }
  onClear(){
    this.recipeForm.reset();
  }
  
  onClick(){
    this.router.navigate(['../../',this.id],{relativeTo:this.route});
  }

}
