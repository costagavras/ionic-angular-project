import { Component, OnInit, OnDestroy } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipesService } from './recipes.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit, OnDestroy {
  recipes: Recipe[];
  private recipesSub: Subscription[] = [];

  constructor(private recipesService: RecipesService) { }

  ngOnInit() {

    console.log('ngOnInit');
    console.log(this.recipes);
    // this.recipesSub.push(this.recipesService.recipesChanged.subscribe((recipesUpdated: Recipe[]) => {
    //   this.recipes = recipesUpdated;
    //   }
    // ));
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter');
    this.recipes = this.recipesService.getAllRecipes();
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter');
  }

  ionViewWillLeave() {
    console.log('ionViewWillLeave');
  }

  ionViewDidLeave() {
    console.log('ionViewDidLeave');
  }

  ngOnDestroy() {
    if (this.recipesSub) {
      this.recipesSub.forEach(sub => sub.unsubscribe());
    }
  }

}
