import { createReducer, on, Action } from '@ngrx/store';
import * as fromActions from './estate-deals.actions';
import { EstateDeal } from '../shared/models/estate-deal.interface';

export interface EstateDealState {
  loading: boolean;
  loaded: boolean;
  error: string;
  data: EstateDeal[] | null;
  search: string;
}
export const initialState: EstateDealState = {
  loading: false,
  loaded: false,
  error: '',
  data: null,
  search: '',
};

export const counterReducer = createReducer(
  initialState,
  on(fromActions.loadEstateDeals, (state) => ({
    ...state,
    loading: true,
    loaded: false,
  })),
  on(fromActions.loadEstateDealsSuccess, (state, { data }) => ({
    ...state,
    loading: false,
    loaded: true,
    data,
  })),
  on(fromActions.loadEstateDealsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    loaded: false,
    error,
  })),
  on(fromActions.updateEstateDeal, (state) => ({
    ...state,
    loading: true,
    loaded: false,
  })),
  on(fromActions.updateEstateDealSuccess, (state, { data }) => ({
    ...state,
    data: data,
    loading: false,
    loaded: true,
  })),
  on(fromActions.filterEstateDeals, (state, { search }) => ({
    ...state,
    loading: false,
    loaded: true,
    search: search,
  }))
);

export function reducer(state: EstateDealState | undefined, action: Action) {
  return counterReducer(state, action);
}
