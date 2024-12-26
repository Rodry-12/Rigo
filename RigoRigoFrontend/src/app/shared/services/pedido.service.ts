import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pedido } from '../interfaces/pedido.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  constructor(private http: HttpClient) { }

  crearPedido(pedido: Pedido): Observable<Pedido> {
    return this.http.post<Pedido>('/api/Pedido/CrearPedido', pedido);
  }
}
