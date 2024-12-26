import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  private carrito: any[] = []; // Lista de productos en el carrito
  private contadorCarrito: number = 0; // Total de productos en el carrito

  // Método para obtener los productos del carrito
  getCarrito(): any[] {
    return this.carrito;
  }

  // Método para obtener el contador del carrito
  getContadorCarrito(): number {
    return this.contadorCarrito;
  }

  // Método para agregar productos al carrito
  agregarAlCarrito(producto: any, cantidad: number): void {
    const productoExistente = this.carrito.find(item => item.nombre === producto.nombre);

    if (productoExistente) {
      productoExistente.cantidad += cantidad;
    } else {
      this.carrito.push({ ...producto, cantidad });
    }

    this.contadorCarrito += cantidad;
  }

  calcularTotal(): number {
    return this.carrito.reduce((total, producto) => total + (producto.precio * producto.cantidad), 0);
  }

  // Método para limpiar el carrito (opcional)
  limpiarCarrito(): void {
    this.carrito = [];
    this.contadorCarrito = 0;
  }
}
