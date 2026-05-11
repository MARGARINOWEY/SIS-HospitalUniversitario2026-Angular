import { Routes } from '@angular/router';
import { authGuard } from './core/auth/auth.guard';

export const routes: Routes = [
  // ==========================================
  // RUTAS PÚBLICAS (Web del Hospital)
  // ==========================================
  {
    path: '',
    redirectTo: 'login', 
    pathMatch: 'full'
  },

  // ==========================================
  // RUTA DE LOGIN (Sin Layout de Admin)
  // ==========================================
  {
    path: 'login',
    loadComponent: () => import('./core/auth/login/login').then(m => m.Login),
    title: 'Ingreso al Sistema | SISU'
  },

  // ==========================================
  // RUTAS PRIVADAS (Panel de Administración)
  // ==========================================
  {
    path: 'admin',
    // 1. CARGAMOS EL LAYOUT PADRE
    loadComponent: () => import('./core/layout/admin-layout/admin-layout').then(m => m.AdminLayout),
    canActivate: [authGuard],
    // 2. TODAS LAS RUTAS HIJAS SE RENDERIZAN DENTRO DEL <router-outlet> DEL ADMIN LAYOUT
    children: [
      {
        path: 'emergencia',
        children: [
          {
            path: '',
            loadComponent: () => import('./features/emergencia/bienvenida/bienvenida').then(m => m.Bienvenida),
            title: 'Bienvenida | Emergencias SISU'
          },
          {
            path: 'pacientes',
            loadChildren: () => import('./features/emergencia/pacientes/pacientes').then(m => m.Pacientes)
          }
        ]
      },
      // Puedes descomentar y agregar las demás rutas cuando las vayas creando:
      // {
      //   path: 'caja',
      //   loadChildren: () => import('./features/caja/caja.routes').then(m => m.CAJA_ROUTES)
      // },
      // {
      //   path: 'farmacia',
      //   loadChildren: () => import('./features/farmacia/farmacia.routes').then(m => m.FARMACIA_ROUTES)
      // },
      // {
      //   path: 'estudiantes',
      //   loadChildren: () => import('./features/estudiantes/estudiantes.routes').then(m => m.ESTUDIANTES_ROUTES)
      // },
      {
        path: '',
        redirectTo: 'emergencia', // Redirige por defecto a emergencia (o a un dashboard) al entrar a /admin
        pathMatch: 'full'
      }
    ]
  },

  // ==========================================
  // RUTAS DE ERROR (Comodín)
  // ==========================================
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

// import { Routes } from '@angular/router';

// export const routes: Routes = [
//   // ==========================================
//   // RUTAS PÚBLICAS (Web del Hospital)
//   // ==========================================
//   {
//     path: '',
//     // Aquí cargaríamos un layout público (Header y Footer de la página web)
//     // loadComponent: () => import('./core/layout/public-layout/public-layout.component').then(m => m.PublicLayoutComponent),
//     children: [
//       {
//         path: '',
//         loadComponent: () => import('./features/webpublica/home/home.component').then(m => m.HomeComponent),
//         title: 'Hospital SISU | Inicio'
//       },
//       {
//         path: 'farmacia-catalogo',
//         loadComponent: () => import('./features/webpublica/catalogo/catalogo.component').then(m => m.CatalogoComponent),
//         title: 'Farmacia | Hospital SISU'
//       }
//     ]
//   },

//   // ==========================================
//   // RUTA DE LOGIN
//   // ==========================================
//   {
//     path: 'login',
//     loadComponent: () => import('./core/auth/login/login.component').then(m => m.LoginComponent),
//     title: 'Ingreso al Sistema | SISU'
//   },

//   // ==========================================
//   // RUTAS PRIVADAS (Panel de Administración)
//   // ==========================================
//   {
//     path: 'admin',
//     // Aquí cargaremos el Layout principal (Sidebar izquierdo, Navbar superior)
//     // loadComponent: () => import('./core/layout/admin-layout/admin-layout.component').then(m => m.AdminLayoutComponent),
//     // canActivate: [authGuard], // <-- Futuro Guard para proteger las rutas
//     children: [
//       {
//         path: 'dashboard',
//         loadComponent: () => import('./features/administracion/dashboard/dashboard.component').then(m => m.DashboardComponent),
//         title: 'Panel Principal'
//       },
//       {
//         path: 'caja',
//         loadChildren: () => import('./features/caja/caja.routes').then(m => m.CAJA_ROUTES)
//       },
//       {
//         path: 'emergencia',
//         loadChildren: () => import('./features/emergencia/emergencia.routes').then(m => m.EMERGENCIA_ROUTES)
//       },
//       {
//         path: 'farmacia',
//         loadChildren: () => import('./features/farmacia/farmacia.routes').then(m => m.FARMACIA_ROUTES)
//       },
//       {
//         path: 'estudiantes',
//         loadChildren: () => import('./features/estudiantes/estudiantes.routes').then(m => m.ESTUDIANTES_ROUTES)
//       },
//       {
//         path: '',
//         redirectTo: 'dashboard',
//         pathMatch: 'full'
//       }
//     ]
//   },

//   // ==========================================
//   // RUTAS DE ERROR (Comodín)
//   // ==========================================
//   {
//     path: '**',
//     redirectTo: '', // O redirigir a un componente de "Página no encontrada (404)"
//     pathMatch: 'full'
//   }
// ];