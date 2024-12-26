import { Component, OnInit } from '@angular/core';
import { CarritoService } from 'src/app/shared/services/carrito.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private carritoService: CarritoService) { }

  ngOnInit(): void {
  }

  get contadorCarrito(): number {
    return this.carritoService.getContadorCarrito();
  }

  limpiarCarrito(){
    this.carritoService.limpiarCarrito();
  }
}
