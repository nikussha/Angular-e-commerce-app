import { map, Observable, tap } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { productType } from '../productType';
import { Router } from '@angular/router';

@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.scss'],
})
export class ElectronicsComponent implements OnInit {
  electronics: Observable<productType[] | undefined> = this.serv.obs$.pipe(
    map((val: productType[]) => {
      if (val) {
        return val.filter((el: productType) => el.category == 'electronics');
      } else {
        return;
      }
    })
  );
  constructor(private serv: ProductsService, private router: Router) {}
  navigateto(id: number) {
    this.router.navigate(['/viewdetails', id]);
  }
  ngOnInit(): void {}
}
