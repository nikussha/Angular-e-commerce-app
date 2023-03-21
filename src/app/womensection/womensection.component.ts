import { ProductsService } from './../products.service';
import { map, Observable, tap } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { productType } from '../productType';
import { Router } from '@angular/router';

@Component({
  selector: 'app-womensection',
  templateUrl: './womensection.component.html',
  styleUrls: ['./womensection.component.scss'],
})
export class WomensectionComponent implements OnInit {
  womenssection$: Observable<productType[] | undefined> = this.serv.obs$.pipe(
    map((arr: productType[]) => {
      if (arr) {
        return arr.filter((item: productType) => {
          return item.category == "women's clothing";
        });
      }
      return;
    })
  );
  constructor(private serv: ProductsService, private route: Router) {}

  ngOnInit(): void {}
}
