import { Component, OnInit } from '@angular/core';
import { AbstractControlDirective } from '@angular/forms';
import { Product } from '../../interfaces/product.interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: Product[] = [];
  //Model
  product: Product = { name: '', price: 0 };

  constructor() { }

  ngOnInit(): void {
  }

  public save(form: AbstractControlDirective): void {

    form.control?.markAllAsTouched();

    if(form.valid) {
      this.products.push(this.product);
      this.product = { name: '', price: 0 };
      form.reset(this.product);
    }

  }

}
