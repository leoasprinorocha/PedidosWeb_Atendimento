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
  produtos!: PedidoProdutoSimplificado[];
}
