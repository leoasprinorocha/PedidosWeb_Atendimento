import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { NavigationExtras, Router } from '@angular/router';
import { UsuarioLogado } from '../../app/models/usuarioLogado';
import { db } from '../../app/IndexedDB_Context/db';

interface User {
  email: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  constructor(private loginService: LoginService, private router: Router) {}

  usuario: User = {
    email: '',
    password: '',
  };
  usuarioAutenticado$: UsuarioLogado | undefined;

  ngOnInit() {
    this.loginService.getUserFromCache().subscribe((a) => {
      if (a.lenght > 0) {
        this.router.navigate(['pedidos']);
      } else {
        this.router.navigate(['']);
      }
    });
  }
  onLogin() {
    this.LogarComCache();
  }

  private LogarComCache() {
    this.loginService
      .autenticar(this.usuario.email, this.usuario.password)
      .subscribe((data) => {
        if (data) {
          this.usuarioAutenticado$ = data;
          this.loginService.setUserToCache(this.usuarioAutenticado$);
          alert(`Bem vindo ${data.name}`);
          this.router.navigate(['pedidos']);
        }
      });
  }
}
