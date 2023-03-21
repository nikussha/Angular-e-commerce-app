import { map, Observable } from 'rxjs';
import { ProductsService } from './../../../products.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { productType } from 'src/app/productType';

@Component({
  selector: 'app-viewdetails',
  templateUrl: './viewdetails.component.html',
  styleUrls: ['./viewdetails.component.scss'],
})
export class ViewdetailsComponent implements OnInit {
  id!: number;
  viewitem$: Observable<productType | undefined> = this.serv.obs$.pipe(
    map((arr: productType[]) => {
      if (arr) {
        return arr.find((item: productType) => item.id == this.id);
      }
      return;
    })
  );
  constructor(private serv: ProductsService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    console.log(this.id);
  }
}
