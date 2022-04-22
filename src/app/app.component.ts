import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'basics';
  products: { name: string; price: number }[] = [
    { name: 'biscuit', price: 10 },
    { name: 'wafer', price: 20 },
    { name: 'chocolate', price: 90 },
  ];

  addNewProduct(productData: { name: string; price: number }) {
    this.products.push({
      name: productData.name,
      price: productData.price,
    });
  }
}
