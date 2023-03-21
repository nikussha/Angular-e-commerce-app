import { productType } from 'src/app/productType';
import { SortbyService } from './../sortby.service';
import { ProductsService } from './../products.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { tap } from 'rxjs/internal/operators/tap';
import { map } from 'rxjs/internal/operators/map';
import { Route, Router } from '@angular/router';
import { sortbyy } from '../sortby';
import { withLatestFrom } from 'rxjs/internal/operators/withLatestFrom';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  product: Observable<productType[]> = this.serv.obs$;

  constructor(private serv: ProductsService, private srt: SortbyService) {}
  ngOnInit(): void {
    console.log('home component');
  }
}
