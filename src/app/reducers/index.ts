import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from '@ngrx/store';

import * as fromEstateDealsReducers from './estate-deals.reducers';

export interface State {
  estateDeals: fromEstateDealsReducers.EstateDealState;
}

export const reducers: ActionReducerMap<State> = {
  estateDeals: fromEstateDealsReducers.reducer,
};

export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
