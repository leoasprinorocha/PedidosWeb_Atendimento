import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Modulo } from '../models/modulo';
import { Observable } from 'rxjs';
import { AppComponent } from '../app.component';

@Injectable({
  providedIn: 'root',
})
export class SistemaService {
  constructor(private httpClient: HttpClient) {}

  recuperaModulosSistema(): Observable<Modulo[]> {
    return this.httpClient.get<Modulo[]>(
      `${AppComponent.apiUrl}sistema/recuperamodulossistema`
    );
  }

  recuperaModulosSistemaLocalStorage() {
    var modulos: Modulo[] = [];
    var modulosLocalStorage = localStorage.getItem('modulos') ?? '';
    if (modulosLocalStorage != '')
      modulos = JSON.parse(modulosLocalStorage) as Modulo[];
    return modulos;
  }

  setModulosSistemaLocalStorage(modulos: Modulo[]) {
    var modulosLocalStorage = this.recuperaModulosSistemaLocalStorage();
    if (modulosLocalStorage.length <= 0) {
      localStorage.setItem('modulos', JSON.stringify(modulos));
    }
  }
}
