import { map, Observable } from 'rxjs';
import { CartService } from './cart.service';
import { Component, OnInit } from '@angular/core';
import { productType } from '../productType';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  cartproducts$: Observable<productType[]> = this.serv.obs$;
  constructor(public serv: CartService) {}

  ngOnInit(): void {}
  deleteproduct(id: number) {
    this.serv.deleteproduct(id);
  }
}
