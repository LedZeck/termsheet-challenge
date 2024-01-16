import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { EstateDeal } from '../models/estate-deal.interface';
import { estateDealsMock } from '../utils/estate-deals-mock';
import { EstateDealTypeFilter } from '../../components/estate-deals-search-form/estate-deals-search-form.component';

@Injectable({
  providedIn: 'root',
})
export class EstateDealsService {
  constructor() {}

  getEstateDeals(): Observable<EstateDeal[]> {
    return of(estateDealsMock);
  }

  searchEstateDeals(
    searchTerm: EstateDealTypeFilter
  ): Observable<EstateDeal[]> {
    console.log('searchTerm', searchTerm);
    return of(
      estateDealsMock.filter((estateDeal) => {
        return estateDeal.dealType === searchTerm.type;
      })
    );
  }
}
