import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppComponent } from '../app.component';
import { UsuarioLogado } from '../models/usuarioLogado';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  constructor(private httpClient: HttpClient) {}

  autenticar(email: string, password: string): Observable<UsuarioLogado> {
    return this.httpClient.get<UsuarioLogado>(
      `${AppComponent.apiUrl}usuarios/autenticar/${email}/${password}`
    );
  }

  setUserToLocalStorage(usuarioLogado: UsuarioLogado) {
    var usuarioSalvo = this.getUserFromLocalStorage();
    if (usuarioSalvo.accessToken === '') {
      localStorage.setItem('user', JSON.stringify(usuarioLogado));
    }
  }

  getUserFromLocalStorage(): UsuarioLogado {
    var userAuthenticated: string;
    userAuthenticated = localStorage.getItem('user') ?? '';
    if (userAuthenticated != '') {
      var usuarioAutenticado = JSON.parse(userAuthenticated) as UsuarioLogado;
      return usuarioAutenticado;
    } else {
      var usuarioNaoAutenticado: UsuarioLogado = {
        name: '',
        accessToken: '',
        email: '',
        id: '',
        expiresIn: 0,
        idAdesao: ''
      };
      return usuarioNaoAutenticado;
    }
  }

  deleteUserFromLocalStorate() {
    localStorage.removeItem('user');
  }
}
