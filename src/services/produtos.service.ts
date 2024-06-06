import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { Produto } from '../app/models/produto';
import { AppComponent } from '../app/app.component';
import { ApiResponse } from '../app/models/apiresponse';


@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
  constructor(private httpClient: HttpClient) {}
  idProduto: string | undefined;
  public observableArray: BehaviorSubject<Produto[]> = new BehaviorSubject<
    Produto[]
  >([]);

  recuperaProduto(idProduto: string): Observable<Produto> {
    return this.httpClient.get<Produto>(
      `${AppComponent.apiUrl}produto/recuperaproduto/${idProduto}`
    );
  }

  atualizaProduto(produto: Produto): Observable<ApiResponse> {
    return this.httpClient
      .put<ApiResponse>(
        `${AppComponent.apiUrl}produto/atualizaproduto`,
        produto
      )
      .pipe(
        map((res) => {
          return res;
        })
      );
  }

  recuperaProdutosAdesao(idAdesao: string) {
    this.httpClient
      .get<Produto[]>(
        `${AppComponent.apiUrl}produto/recuperaprodutosadesao/${idAdesao}`
      )
      .subscribe((data) => {
        this.observableArray.next(data);
      });
  }

  cadastraProduto(produto: Produto): Observable<ApiResponse> {
    return this.httpClient
      .post<ApiResponse>(
        `${AppComponent.apiUrl}produto/cadastraproduto`,
        produto
      )
      .pipe(
        map((res) => {
          return res;
        })
      );
  }

  excluirProduto(idProduto: string): Observable<ApiResponse> {
    return this.httpClient
      .delete<ApiResponse>(
        `${AppComponent.apiUrl}produto/deletarproduto/${idProduto}`
      )
      .pipe(
        map((res) => {
          return res;
        })
      );
  }
}
