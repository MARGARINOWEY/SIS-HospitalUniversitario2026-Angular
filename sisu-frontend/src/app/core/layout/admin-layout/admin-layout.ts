import { Component, inject } from '@angular/core'; 
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive, Router } from '@angular/router';

// Si tienes un AuthService que maneja esto, impórtalo:
// import { AuthService } from '../../core/auth/auth'; 

@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './admin-layout.html',
  styleUrl: './admin-layout.css',
})
export class AdminLayout {
  
  // 1. Inyectamos el Router para la redirección
  private router = inject(Router);

  // private authService = inject(AuthService); // Descomentar si usas un servicio

  isSidebarOpen = true;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  // 2. Implementamos la función logout
  logout() {
    // 1. Limpiamos completamente el almacenamiento local del navegador
    localStorage.clear(); 
    sessionStorage.clear(); // Por si guardaste algo aquí también

    // 2. Opcional: Si tienes un AuthService que guarda datos del usuario en "Signals" o variables locales, llama a su método de limpieza.
    // this.authService.clearUser();

    // 3. Redirigimos al login
    this.router.navigate(['/login']);
  }
}