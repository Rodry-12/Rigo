import { Producto } from "./producto.interface";

export interface Pedido {
  id: number;
  cedulaCliente: string;
  direccionEntrega: string;
  total: number;
  productos: Producto[];
}
