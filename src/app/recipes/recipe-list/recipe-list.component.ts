import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Pasta', 'This is pasta',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkDM_oDgy7e3UJRAow3QjbYhnFjKA_wSGxEDfJnBxNQ-n_SSiu'),
    new Recipe('Pizza', 'This is pizza',
      'https://cdn.shopify.com/s/files/1/1752/5753/products/Pep-2000x2000-white_1800x.jpg?v=1489198364')
  ];
  constructor() { }

  ngOnInit() {
  }
  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
