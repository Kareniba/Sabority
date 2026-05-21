import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { Recipes } from './pages/recipes/recipes';
import { RecipeDetail } from './pages/recipe-detail/recipe-detail';
import { RecipeForm } from './pages/recipe-form/recipe-form';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  { path: 'recipes', component: Recipes },
  { path: 'recipes/new', component: RecipeForm },
  { path: 'recipes/edit/:id', component: RecipeForm },
  { path: 'recipes/:id', component: RecipeDetail },
  { path: '**', redirectTo: '' }
];
