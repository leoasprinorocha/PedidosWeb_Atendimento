import { Component, OnInit } from '@angular/core';
import { MainpageModule } from '../mainpage/mainpage/mainpage.module';
import { PedidosService } from '../../services/pedidos.service';
import { PedidoCompleto } from '../../app/models/pedidoCompleto';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrl: './pedidos.component.css',
})
export class PedidosComponent implements OnInit {
  public data$: PedidoCompleto[] | undefined;

  constructor(
    private pedidoService: PedidosService,
    private loginService: LoginService
  ) {}

  ngOnInit() {
    this.loginService.getUserFromCache().then((a) => {
      if (a.length > 0 && a[0].accessToken) {
        let idAdesao = a[0].idAdesao;
        this.pedidoService.recuperaPedidosDataAtualAdesao(idAdesao);
        this.pedidoService.observableArray.subscribe((data) => {
          this.data$ = data;
        });
      } else {
        alert('Não autenticado');
      }
    });
  }
}
