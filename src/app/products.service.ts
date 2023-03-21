import { withLatestFrom } from 'rxjs/internal/operators/withLatestFrom';
import { productType } from 'src/app/productType';
import { SortbyService } from './sortby.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  combineLatest,
  map,
  Observable,
  of,
  Subject,
  switchMap,
  tap,
  toArray,
} from 'rxjs';
import { sortbyy } from './sortby';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private dataSubject$ = new BehaviorSubject<any>(null);
  obs$ = this.dataSubject$.asObservable();
  api = 'https://fakestoreapi.com/products';
  constructor(private http: HttpClient, private sortserv: SortbyService) {}
  get() {
    return this.http.get(this.api).pipe(
      tap((val) => this.dataSubject$.next(val)),
      tap((val) => console.log(val))
    );
  }
  displaysorted(state: sortbyy) {
    if (state == 'price') {
      let arr = this.dataSubject$.value.sort(
        (a: { price: number }, b: { price: number }) => {
          return b.price - a.price;
        }
      );
      this.dataSubject$.next(arr);
    } else if (state == 'rating') {
      let arr = this.dataSubject$.value.sort(
        (a: { rating: { rate: number } }, b: { rating: { rate: number } }) => {
          return b.rating.rate - a.rating.rate;
        }
      );
      this.dataSubject$.next(arr);
    } else if (state == 'default') {
      let arr = this.dataSubject$.value.sort(() => {
        return Math.random() - 0.5;
      });
      this.dataSubject$.next(arr);
    }
  }
}
