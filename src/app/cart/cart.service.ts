import { SortbyService } from './../sortby.service';
import { productType } from 'src/app/productType';
import { Observable, BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems$ = new BehaviorSubject<productType[]>([]);
  public addeditem: any;
  obs$ = this.cartItems$.asObservable();
  itemsincart: number = 0;
  constructor(private sorted: SortbyService) {}

  addtocart(item: productType, amount: number) {
    this.addeditem = item.title;
    console.log(this.addeditem);

    setTimeout(() => {
      this.addeditem = null;
    }, 2000);
    let cartarr = this.cartItems$.value;
    let product = cartarr.find((obj: productType) => obj.id == item.id);
    if (product) {
      product.amount = amount;
      product.price = item.price * amount;
    } else {
      cartarr.push({ ...item, amount: amount, price: amount * item.price });
      this.itemsincart++;
    }
    this.cartItems$.next(cartarr);
  }
  deleteproduct(id: number) {
    this.itemsincart--;
    let updatedarr: productType[] = this.cartItems$.value.filter((item) => {
      return item.id !== id;
    });
    console.log(updatedarr);
    this.cartItems$.next(updatedarr);
  }
}
