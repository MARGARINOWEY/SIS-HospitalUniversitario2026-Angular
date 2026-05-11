import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  // Inyectamos el router para poder redirigir
  const router = inject(Router);
  
  // Verificamos si existe el token de sesión (Ajusta la clave 'token' a la que uses en tu Login)
  const token = localStorage.getItem('token'); 

  if (token) {
    // Si hay token, permitimos el acceso a la ruta
    return true; 
  } else {
    // Si NO hay token (porque cerró sesión), lo mandamos de vuelta al login
    router.navigate(['/login']);
    return false;
  }
};