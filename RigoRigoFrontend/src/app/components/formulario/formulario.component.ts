import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pedido } from 'src/app/shared/interfaces/pedido.interface';
import { CarritoService } from 'src/app/shared/services/carrito.service';
import { PedidoService } from 'src/app/shared/services/pedido.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  @Input() formularioVisible: boolean = false;
  @Input() totalCarrito: number = 0;
  @Output() formularioOculto = new EventEmitter<boolean>();

  pedido: Pedido = {
    id: 0,
    cedulaCliente: '',
    direccionEntrega: '',
    total: 0,
    productos: []
  };

  constructor(
    private carritoService: CarritoService,
    private pedidoService: PedidoService
  ) { }

  ngOnInit(): void {
  }

  enviarPedido(): void {
    this.pedido.productos = this.carritoService.getCarrito();
    this.pedido.total = this.totalCarrito;
    this.pedido.cedulaCliente = this.pedido.cedulaCliente.toString();

    // Enviar el pedido al servicio
    this.pedidoService.crearPedido(this.pedido).subscribe(
      (respuesta) => {
        alert('Pedido creado con éxito:');
        this.limpiarPedido();
      },
      (error) => {
        alert('Error al crear el pedido:');
      }
    );
  }

  cancelarFormulario(){
    this.limpiarPedido();
  }


  limpiarPedido() {
    this.carritoService.limpiarCarrito();
    this.formularioOculto.emit(false);
    this.totalCarrito = 0;
    this.pedido = {
      id: 0,
      cedulaCliente: '',
      direccionEntrega: '',
      total: 0,
      productos: []
    };
  }

}
