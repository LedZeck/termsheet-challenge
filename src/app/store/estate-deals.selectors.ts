import { createSelector } from '@ngrx/store';
import * as fromReducers from './';

export const selectEstateDealsState = createSelector(
  fromReducers.getEstateDealsState,
  (state) => state
);

export const getEstateDealsData = createSelector(
  selectEstateDealsState,
  (state) => {
    return state?.data;
  }
);
