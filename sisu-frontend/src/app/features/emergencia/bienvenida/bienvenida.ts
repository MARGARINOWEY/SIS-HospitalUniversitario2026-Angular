import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from '../../../core/auth/auth';

@Component({
  selector: 'app-bienvenida',
  imports: [],
  templateUrl: './bienvenida.html',
  styleUrl: './bienvenida.css',
})
export class Bienvenida implements OnInit{
  private authService = inject(AuthService);

    //nombreUsuario: string = '';
    rolUsuario: string = '';

    ngOnInit() {
      //this.nombreUsuario = this.authService.getUsername();
      this.rolUsuario = this.authService.getUserRole();
    }
}
