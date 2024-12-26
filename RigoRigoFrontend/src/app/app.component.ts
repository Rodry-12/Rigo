import { Component } from '@angular/core';
import { CarritoService } from './shared/services/carrito.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RigoRigoFrontend';
  formularioVisible = false;
  totalCarrito: number = 0;

  constructor(private carritoService: CarritoService,) {

  }

  mostrarFormularioPedido(){
    if (this.carritoService.getContadorCarrito() > 0) {
      this.formularioVisible = !this.formularioVisible;
      this.obtenerTotalCarrito();
    } else {
      alert('No tienes productos agregados al carrito.');
    }
  }

  obtenerTotalCarrito(): void {
    this.totalCarrito = this.carritoService.calcularTotal();
  }

  ocultarFormularioPedido(visible: boolean): void {
    this.formularioVisible = visible;
  }
}
