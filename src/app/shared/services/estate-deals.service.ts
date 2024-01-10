import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { EstateDeal } from '../models/estate-deal.interface';
import { estateDealsMock } from '../utils/estate-deals-mock';

@Injectable({
  providedIn: 'root',
})
export class EstateDealsService {
  constructor() {}

  getEstateDeals(): Observable<EstateDeal[]> {
    return of(estateDealsMock);
  }
}
