import {
  Component,
  ElementRef,
  EventEmitter,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent implements OnInit, OnChanges {
  @Output() productAdded = new EventEmitter<{ name: string; price: number }>();
  // newProductName: string = '';
  @ViewChild('newProductName') productName: ElementRef;
  newProductPrice: number = 0;

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnchanges called');
    console.log(changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit called');
  }

  addProduct() {
    this.productAdded.emit({
      name: this.productName.nativeElement.value,
      price: this.newProductPrice,
    });
  }
}
