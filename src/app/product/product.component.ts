import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit, OnChanges {
  @Input() products: { name: string; price: number }[];

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnchanges called of product component');
    console.log(changes);
  }
  ngOnInit(): void {
    console.log('ngOnInit called of product component');
  }
}
