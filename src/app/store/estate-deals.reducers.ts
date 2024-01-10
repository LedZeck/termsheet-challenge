import { createReducer, on, Action } from '@ngrx/store';
import {
  loadEstateDeals,
  loadEstateDealsSuccess,
  loadEstateDealsFailure,
} from './estate-deals.actions';
import { EstateDeal } from '../shared/models/estate-deal.interface';

export interface EstateDealState {
  loading: boolean;
  loaded: boolean;
  error: string;
  data: EstateDeal[] | null;
}
export const initialState: EstateDealState = {
  loading: false,
  loaded: false,
  error: '',
  data: null,
};

export const counterReducer = createReducer(
  initialState,
  on(loadEstateDeals, (state) => ({
    ...state,
    loading: true,
    loaded: false,
  })),
  on(loadEstateDealsSuccess, (state, { data }) => ({
    ...state,
    loading: false,
    loaded: true,
    data,
  })),
  on(loadEstateDealsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    loaded: false,
    error,
  }))
);

export function reducer(state: EstateDealState | undefined, action: Action) {
  return counterReducer(state, action);
}
