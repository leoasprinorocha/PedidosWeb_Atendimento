// db.ts
import Dexie, { Table } from 'dexie';
import { UsuarioLogado } from '../models/usuarioLogado';

export class AppDB extends Dexie {
  usuariosLogado!: Table<UsuarioLogado, number>;
  constructor() {
    super('ngdexieliveQuery');
    this.version(3).stores({
      usuariosLogado: '++id',
    });
  }
}

export const db = new AppDB();
