import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { ProductsService } from '../products.service';
import { productType } from '../productType';

@Component({
  selector: 'app-mensection',
  templateUrl: './mensection.component.html',
  styleUrls: ['./mensection.component.scss'],
})
export class MensectionComponent implements OnInit {
  mensection$: Observable<productType[] | undefined> = this.serv.obs$.pipe(
    map((arr: productType[]) => {
      if (arr) {
        return arr.filter((item: productType) => {
          return item.category == "men's clothing";
        });
      }
      return;
    })
  );
  constructor(private serv: ProductsService, private route: Router) {}
  ngOnInit(): void {}
}
