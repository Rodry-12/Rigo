import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input() producto: any;
  @Output() agregar = new EventEmitter<{ producto: any; cantidad: number }>();
  cantidad: number = 0; // Cantidad inicial

  constructor() {}

  ngOnInit(): void {}

  incrementarCantidad(): void {
    this.cantidad++;
  }

  decrementarCantidad(): void {
    if (this.cantidad > 0) {
      this.cantidad--;
    }
  }

  agregarAlCarrito(): void {
    this.agregar.emit({ producto: this.producto, cantidad: this.cantidad });
  }

}
