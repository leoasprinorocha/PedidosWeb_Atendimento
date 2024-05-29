import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { NavigationExtras, Router } from '@angular/router';
import { UsuarioLogado } from '../../app/models/usuarioLogado';

interface User {
  email: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(private loginService: LoginService, private router: Router) {}

  usuario: User = {
    email: '',
    password: '',
  };
  usuarioAutenticado$: UsuarioLogado | undefined;

  onLogin() {
    this.loginService
      .autenticar(this.usuario.email, this.usuario.password)
      .subscribe((data) => {
        if (data) {
          this.usuarioAutenticado$ = data;
          this.loginService.setUserToLocalStorage(this.usuarioAutenticado$);
          const navigationExtras: NavigationExtras = {
            state: {
              usuario: this.usuarioAutenticado$,
            },
          };
          this.router.navigate(['mainpage'], navigationExtras);
        }
      });
  }
}
