import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, map, toArray } from 'rxjs';
import { UsuarioLogado } from '../app/models/usuarioLogado';
import { AppComponent } from '../app/app.component';
import { db } from '../app/IndexedDB_Context/db';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private httpClient: HttpClient) {}

  autenticar(email: string, password: string): Observable<UsuarioLogado> {
    return this.httpClient.get<UsuarioLogado>(
      `${AppComponent.apiUrl}usuarios/autenticar/${email}/${password}`
    );
  }

  setUserToCache(usuarioLogado: UsuarioLogado) {
    this.getUserFromCache().then(a => {
      if (a.length === 0) {
        db.usuariosLogado.add(usuarioLogado);
      }
    });



  }

  getUserFromCache() : Promise<UsuarioLogado[]> {

    return db.table('usuariosLogado').toArray();

  }

  deleteUserFromCache() {
    db.usuariosLogado.clear();
  }
}
