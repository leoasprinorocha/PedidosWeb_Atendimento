import { IUsuarioLogado } from "../IndexedDB_Context/models/IUsuarioLogado";

export class UsuarioLogado implements IUsuarioLogado{
    accessToken!: string;
    expiresIn!: number;
    id!: string;
    email!: string;
    name!: string;
    idAdesao!: string;
}
