import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { UsuarioLogado } from '../../app/models/usuarioLogado';

@Component({
  selector: 'app-mainpage',
  standalone: false,
  templateUrl: './mainpage.component.html',
  styleUrl: './mainpage.component.css',
})
export class MainpageComponent implements OnInit {
  usuarioLogado: UsuarioLogado;
  constructor(private router: Router, private loginService: LoginService) {
    const navigation = this.router.getCurrentNavigation();
    const navigationObject = navigation?.extras.state as {
      usuario: UsuarioLogado;
    };
    this.usuarioLogado = navigationObject.usuario;
  }

  ngOnInit() {
    var usuarioEstaAutenticado = this.loginService.getUserFromLocalStorage();
    if (usuarioEstaAutenticado.accessToken) {

    } else {
      this.router.navigate(['']);
    }
  }
}
