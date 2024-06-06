import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, map, toArray } from 'rxjs';
import { UsuarioLogado } from '../app/models/usuarioLogado';
import { AppComponent } from '../app/app.component';
import { db } from '../app/IndexedDB_Context/db';
import { NgxIndexedDBService } from 'ngx-indexed-db';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  usuarioCache: UsuarioLogado = new UsuarioLogado();
  constructor(
    private httpClient: HttpClient,
    private dbService: NgxIndexedDBService
  ) {}

  autenticar(email: string, password: string): Observable<UsuarioLogado> {
    return this.httpClient.get<UsuarioLogado>(
      `${AppComponent.apiUrl}usuarios/autenticar/${email}/${password}`
    );
  }

  setUserToCache(usuarioLogado: UsuarioLogado) {
    this.dbService.add('usuario', usuarioLogado).subscribe((b) => {
      console.log(`Usuário adicionado cache ${b}`);
      this.usuarioCache = usuarioLogado;
    });
  }

  getUserFromCache(): Observable<any> {
    return this.dbService.getAll('usuario');
  }

  deleteUserFromCache() {
    db.usuariosLogado.clear();
  }
}
