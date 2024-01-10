import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from '@ngrx/store';

import * as fromEstateDealsReducers from './estate-deals.reducers';
import * as fromEstateDealsEffects from './estate-deals.effects';

export interface State {
  estateDeals: fromEstateDealsReducers.EstateDealState;
}

export const reducers: ActionReducerMap<State> = {
  estateDeals: fromEstateDealsReducers.reducer,
};

export const getEstateDealsState = (state: State) => state.estateDeals;

export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
