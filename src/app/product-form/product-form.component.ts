import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent implements OnInit {
  @Output() productAdded = new EventEmitter<{ name: string; price: number }>();
  // newProductName: string = '';
  @ViewChild('newProductName') productName: ElementRef;
  newProductPrice: number = 0;

  constructor() {}

  ngOnInit(): void {}

  addProduct() {
    this.productAdded.emit({
      name: this.productName.nativeElement.value,
      price: this.newProductPrice,
    });
  }
}
