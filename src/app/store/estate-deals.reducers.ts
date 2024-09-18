import { createReducer, on, Action } from '@ngrx/store';
import * as fromActions from './estate-deals.actions';
import { EstateDeal } from '../shared/models/estate-deal.interface';

export interface EstateDealState {
  loading: boolean;
  loaded: boolean;
  error: string;
  data: EstateDeal[] | null;
  search: string;
  filteredData: EstateDeal[] | null;
}
export const initialState: EstateDealState = {
  loading: false,
  loaded: false,
  error: '',
  data: null,
  search: '',
  filteredData: null,
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
    filteredData: data,
  })),
  on(fromActions.loadEstateDealsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    loaded: false,
    error,
  })),
  on(fromActions.addEstateDeals, (state) => ({
    ...state,
    loading: true,
    loaded: false,
  })),
  on(fromActions.addEstateDealsSuccess, (state, { data }) => ({
    ...state,
    data: data,
    loading: false,
    loaded: true,
    filteredData: data,
  })),
  on(fromActions.addEstateDealsFailure, (state, { error }) => ({
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
    filteredData: data,
  })),
  on(fromActions.filterEstateDeals, (state, { search, filters }) => {
    const filteredData =
      state.data?.filter((deal) => {
        const matchesSearch = deal.dealName
          .toLowerCase()
          .includes(search.toLowerCase());
        const matchesFilters =
          filters.length === 0 || filters.includes(deal.dealType);
        return matchesSearch && matchesFilters;
      }) || [];

    return {
      ...state,
      filteredData,
      search,
    };
  })
);

export function reducer(state: EstateDealState | undefined, action: Action) {
  return counterReducer(state, action);
}
