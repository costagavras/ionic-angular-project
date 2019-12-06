import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Schnitzel',
      imageUrl: 'https://www.dvo.com/link/0630_155947172.jpg',
      ingredients: ['French Fries', 'Pork Meat', 'Salad']
    },
    {
      id: 'r2',
      title: 'Spaghetti',
      imageUrl: 'https://skinnyms.com/wp-content/uploads/2012/09/Slow-Cooker-Cheesy-Spaghetti-with-Homemade-Sausage-Recipe5-750x498.jpg',
      ingredients: ['Spaghetti', 'Sauce', 'Olive Oil']
    }
  ];

  constructor() { }

  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipe(recipeId: string) {
    return {...this.recipes.find(recipe => {
      return recipe.id === recipeId;
      })
    };
  }

  deleteRecipe(recipeId: string) {
    this.recipes = this.recipes.filter(recipe => {
      return recipe.id !== recipeId;
    });
    this.recipesChanged.next(this.recipes);
  }

}
