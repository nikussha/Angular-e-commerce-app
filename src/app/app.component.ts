import { SortbyService } from './sortby.service';
import { sortbyy } from './sortby';
import { CartService } from './cart/cart.service';
import { filter, map, Observable, tap, toArray } from 'rxjs';
import { ProductsService } from './products.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  state = sortbyy;
  isVisible: boolean = false;
  constructor(
    public serv: ProductsService,
    public cart: CartService,
    public sortserv: SortbyService
  ) {
    this.serv.get().subscribe();
  }
  ngOnInit(): void {}

  displaycart() {
    this.isVisible = !this.isVisible;
  }

  detectchange(e: any) {
    let value = e.target.value;
    this.sortserv.changestate(value);
    this.serv.displaysorted(value);
  }
}
