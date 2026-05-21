import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RecipeService } from '../../services/recipe';
import { FavoriteService } from '../../services/favorite';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-recipe-detail',
  imports: [CommonModule, RouterLink],
  templateUrl: './recipe-detail.html',
  styleUrl: './recipe-detail.css'
})
export class RecipeDetail implements OnInit {
  receta: any = null;
  cargando = true;
  mensaje = '';

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private favoriteService: FavoriteService,
    public auth: AuthService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.recipeService.getReceta(id).subscribe({
        next: (data) => {
          this.receta = data;
          this.cargando = false;
        },
        error: () => { this.cargando = false; }
      });
    }
  }

  agregarFavorito() {
    this.favoriteService.addFavorito(this.receta._id).subscribe({
      next: () => { this.mensaje = '❤️ Agregado a favoritos!'; },
      error: (err) => { this.mensaje = err.error.message || 'Error al agregar'; }
    });
  }
}
