import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RecipeService } from '../../services/recipe';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-recipes',
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './recipes.html',
  styleUrl: './recipes.css'
})
export class Recipes implements OnInit {
  recetas: any[] = [];
  filtradas: any[] = [];
  busqueda = '';
  cargando = true;

  constructor(private recipeService: RecipeService, public auth: AuthService) {}

  ngOnInit() {
    this.recipeService.getRecetas().subscribe({
      next: (data) => {
        this.recetas = data;
        this.filtradas = data;
        this.cargando = false;
      },
      error: () => { this.cargando = false; }
    });
  }

  filtrar() {
    this.filtradas = this.recetas.filter(r =>
      r.titulo.toLowerCase().includes(this.busqueda.toLowerCase())
    );
  }

  eliminar(id: string) {
    if (confirm('¿Estás seguro de eliminar esta receta?')) {
      this.recipeService.deleteReceta(id).subscribe({
        next: () => {
          this.recetas = this.recetas.filter(r => r._id !== id);
          this.filtradas = this.filtradas.filter(r => r._id !== id);
        }
      });
    }
  }
}
