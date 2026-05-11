import { Component, inject } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);

  loginForm = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]]
  });

  errorMsg: string = '';

  onLogin() {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe({
        next: (response) => {
          // Obtenemos el rol (ej: 'ADMIN', 'EMERGENCIA', 'FARMACIA')
          const role = this.authService.getUserRole(); 
          this.redirectByRole(role);
        },
        error: () => {
          this.errorMsg = 'Credenciales no válidas.';
        }
      });
    }
  }

  private redirectByRole(role: string) {
    switch (role) {
      case 'ADMIN':
        this.router.navigate(['/admin/dashboard']);
        break;
      case 'EMERGENCIA':
        this.router.navigate(['/admin/emergencia']);
        break;
      case 'FARMACIA':
        this.router.navigate(['/admin/farmacia']);
        break;
      default:
        this.router.navigate(['/']); // Ruta por defecto
    }
  }
}