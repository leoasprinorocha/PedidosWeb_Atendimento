import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PedidoCompleto } from '../app/models/pedidoCompleto';
import { BehaviorSubject } from 'rxjs';
import { AppComponent } from '../app/app.component';

@Injectable({
  providedIn: 'root',
})
export class PedidosService {
  public observableArray: BehaviorSubject<PedidoCompleto[]> =
    new BehaviorSubject<PedidoCompleto[]>([]);
  constructor(private httpClient: HttpClient) {}

  recuperaPedidosDataAtualAdesao(idAdesao: string) {
    this.httpClient
      .get<PedidoCompleto[]>(
        `${AppComponent.apiUrl}pedido/recuperapedidosdataatualadesao/${idAdesao}`
      )
      .subscribe((data) => {
        this.observableArray.next(data);
      });
  }
}
