import { createSelector } from '@ngrx/store';
import * as fromReducers from './';
import { EstateDeal } from '../shared/models/estate-deal.interface';

export const selectEstateDealsState = createSelector(
  fromReducers.getEstateDealsState,
  (state) => state
);

export const getEstateDealsData = createSelector(
  selectEstateDealsState,
  (state) => {
    return state?.data as EstateDeal[];
  }
);

export const getEstateDealsFiteredData = createSelector(
  selectEstateDealsState,
  (state) => {
    return state?.data?.filter((estateDeal) => {
      return estateDeal.dealName.toLowerCase() === state.search.toLowerCase();
    });
  }
);
