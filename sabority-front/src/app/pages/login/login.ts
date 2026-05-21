import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  datos = { email: '', password: '' };
  error = '';

  constructor(private auth: AuthService, private router: Router) {}

  login() {
    this.auth.login(this.datos).subscribe({
      next: (res) => {
        this.auth.guardarToken(res.token, res.usuario);
        this.router.navigate(['/recipes']);
      },
      error: (err) => {
        this.error = err.error.message || 'Error al iniciar sesión';
      }
    });
  }
}
