import { Component, OnInit } from '@angular/core';
import { MainpageModule } from '../mainpage/mainpage/mainpage.module';
import { PedidosService } from '../../services/pedidos.service';
import { PedidoCompleto } from '../../app/models/pedidoCompleto';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { UsuarioLogado } from '../../app/models/usuarioLogado';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrl: './pedidos.component.css',
})
export class PedidosComponent {
  public data$: PedidoCompleto[] | undefined;
  public usuarioLogado: UsuarioLogado = new UsuarioLogado();

  constructor(
    private pedidoService: PedidosService,
    private loginService: LoginService,
    private router: Router
  ) {
    this.loginService.getUserFromCache().subscribe((data) => {
      if (data.length === 0 && !data[0]) {
        this.router.navigate(['']);
      } else {
        this.usuarioLogado = data[0];
        let idAdesao = this.usuarioLogado?.idAdesao;
        this.pedidoService.recuperaPedidosDataAtualAdesao(idAdesao);
        this.pedidoService.observableArray.subscribe((data) => {
          this.data$ = data;
        });
      }
    });
  }
}
