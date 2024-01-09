import { createAction, props } from '@ngrx/store';

export enum EstateDealActionTypes {
  LoadEstateDeals = '[EstateDeal] Load EstateDeals',
  LoadEstateDealsSuccess = '[EstateDeal] Load EstateDeals Success',
  LoadEstateDealsFailure = '[EstateDeal] Load EstateDeals Failure',
}

export const loadEstateDeals = createAction(
  EstateDealActionTypes.LoadEstateDeals
);

export const loadEstateDealsSuccess = createAction(
  EstateDealActionTypes.LoadEstateDealsSuccess,
  props<{ data: any }>()
);

export const loadEstateDealsFailure = createAction(
  EstateDealActionTypes.LoadEstateDealsFailure,
  props<{ error: any }>()
);
