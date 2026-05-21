import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {
  datos = { nombre: '', email: '', password: '' };
  error = '';
  exito = '';

  constructor(private auth: AuthService, private router: Router) {}

  register() {
    this.auth.register(this.datos).subscribe({
      next: () => {
        this.exito = 'Usuario registrado exitosamente';
        setTimeout(() => this.router.navigate(['/login']), 1500);
      },
      error: (err) => {
        this.error = err.error.message || 'Error al registrarse';
      }
    });
  }
}
