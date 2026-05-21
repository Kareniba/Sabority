import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RecipeService } from '../../services/recipe';
import { CategoryService } from '../../services/category';

@Component({
  selector: 'app-recipe-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './recipe-form.html',
  styleUrl: './recipe-form.css'
})
export class RecipeForm implements OnInit {
  datos: any = {
    titulo: '',
    descripcion: '',
    ingredientes: [],
    instrucciones: '',
    tiempoPreparacion: 0,
    categoria: '',
    imagen: ''
  };
  categorias: any[] = [];
  ingredienteInput = '';
  editando = false;
  id = '';
  error = '';

  constructor(
    private recipeService: RecipeService,
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.categoryService.getCategorias().subscribe({
      next: (data) => { this.categorias = data; }
    });

    this.id = this.route.snapshot.paramMap.get('id') || '';
    if (this.id) {
      this.editando = true;
      this.recipeService.getReceta(this.id).subscribe({
        next: (data) => { this.datos = data; }
      });
    }
  }

  agregarIngrediente() {
    if (this.ingredienteInput.trim()) {
      this.datos.ingredientes.push(this.ingredienteInput.trim());
      this.ingredienteInput = '';
    }
  }

  quitarIngrediente(i: number) {
    this.datos.ingredientes.splice(i, 1);
  }

  guardar() {
    if (this.editando) {
      this.recipeService.updateReceta(this.id, this.datos).subscribe({
        next: () => this.router.navigate(['/recipes']),
        error: (err) => { this.error = err.error.message || 'Error al actualizar'; }
      });
    } else {
      this.recipeService.createReceta(this.datos).subscribe({
        next: () => this.router.navigate(['/recipes']),
        error: (err) => { this.error = err.error.message || 'Error al crear'; }
      });
    }
  }
}
