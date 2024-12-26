import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/shared/interfaces/producto.interface';
import { CarritoService } from 'src/app/shared/services/carrito.service';
import { ProductoService } from 'src/app/shared/services/producto.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  productos: Producto[] = [];
  loading: boolean = true;
  error: string = '';

  constructor(
    private carritoService: CarritoService,
    private productoService: ProductoService
  ) { }

  ngOnInit(): void {
    this.obtenerProductos();
  }

  agregarAlCarrito(producto: any, cantidad: number): void {
    this.carritoService.agregarAlCarrito(producto, cantidad);
  }

  obtenerProductos(): void {
    this.productoService.obtenerProductos().subscribe(
      (productos) => {
        this.productos = productos;
        this.loading = false;
      },
      (error) => {
        this.error = 'Hubo un error al obtener los productos';
        this.loading = false;
      }
    );
  }
}
