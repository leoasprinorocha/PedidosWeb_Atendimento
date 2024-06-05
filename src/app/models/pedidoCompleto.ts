import { PedidoProdutoSimplificado } from "./pedidoProdutoSimplificado";

export class PedidoCompleto {
  idCliente!: string;
  valorTotal!: number;
  data!: Date;
  descricaoStatusPedido!: string;
  codigoPedido!: number;
  mesa!: string;
  valorTotalString!: string;
  idPedido!: string;
  idMesa!: string;
  idAdesao!: string;
  idStatusPedido!: string;
  produtos!: PedidoProdutoSimplificado[];
}
