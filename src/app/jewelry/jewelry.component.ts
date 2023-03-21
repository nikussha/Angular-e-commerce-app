import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, map } from 'rxjs';
import { ProductsService } from '../products.service';
import { productType } from '../productType';

@Component({
  selector: 'app-jewelry',
  templateUrl: './jewelry.component.html',
  styleUrls: ['./jewelry.component.scss'],
})
export class JewelryComponent implements OnInit {
  jewelery$: Observable<productType[] | undefined> = this.serv.obs$.pipe(
    map((arr: productType[]) => {
      if (arr) {
        return arr.filter((item: productType) => {
          return item.category == 'jewelery';
        });
      }
      return;
    })
  );
  constructor(private serv: ProductsService, private route: Router) {}

  ngOnInit(): void {}
}
