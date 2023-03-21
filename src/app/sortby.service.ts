import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { sortbyy } from './sortby';

@Injectable({
  providedIn: 'root',
})
export class SortbyService {
  private displaysorted = new BehaviorSubject<sortbyy>(sortbyy.price);
  sortedObs$ = this.displaysorted as Observable<sortbyy>;

  changestate(state: sortbyy) {
    this.displaysorted.next(state);
    console.log(state);
  }
  constructor() {}
}
