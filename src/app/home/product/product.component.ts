import { CartService } from './../../cart/cart.service';
import { Route, Router, ActivatedRoute } from '@angular/router';
import { productType } from './../../productType';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  @Input()
  product!: productType;
  notification: any;
  constructor(private route: Router, public serv: CartService) {}
  countitems: FormControl = new FormControl();
  ngOnInit(): void {}
  navigateto(id: number) {
    this.route.navigate(['viewdetails', id]);
  }
  addtocart() {
    if (this.countitems.value > 0) {
      this.serv.addtocart(this.product, this.countitems.value);
      this.countitems.reset();
    }
  }
}
