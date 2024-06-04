import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { UsuarioLogado } from '../../app/models/usuarioLogado';
import { UtilswebComponent } from '../../app/utils/utilsweb/utilsweb.component';

@Injectable({
  providedIn: 'root',
})

@Component({
  selector: 'app-mainpage',
  standalone: false,
  templateUrl: './mainpage.component.html',
  styleUrl: './mainpage.component.css',
})
export class MainpageComponent implements OnInit {
  usuarioLogado: UsuarioLogado = new UsuarioLogado;
  constructor(private router: Router, private loginService: LoginService, private utilWebComponent: UtilswebComponent) {
    const navigation = this.router.getCurrentNavigation();
    const navigationObject = navigation?.extras.state as {
      usuario: UsuarioLogado;
    };
    if (navigationObject != undefined) {
      this.usuarioLogado = navigationObject.usuario;
    }
  }

  ngOnInit() {

  }

  redirecionaRota(url: string){
    this.utilWebComponent.redirecionaRota(url);
  }
}
