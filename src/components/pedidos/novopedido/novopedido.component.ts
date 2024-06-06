import { Component, Injectable } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Produto } from '../../../app/models/produto';
import { PedidosService } from '../../../services/pedidos.service';
import { LoginService } from '../../../services/login.service';
import { ProdutoService } from '../../../services/produtos.service';

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-novopedido',
  templateUrl: './novopedido.component.html',
  styleUrl: './novopedido.component.css',
})
export class NovopedidoComponent {
  constructor(
    private pedidoService: PedidosService,
    private loginService: LoginService,
    private produtoService: ProdutoService
  ) {}
  displayedColumns: string[] = ['Nome', 'Preço', '', '', ''];

  dataSource = new MatTableDataSource();

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  abreComponenteNovoPedido() {
    this.produtoService.recuperaProdutosAdesao(this.loginService.usuarioCache.idAdesao);
    this.produtoService.observableArray.subscribe((data) => {

    });
  }
}
