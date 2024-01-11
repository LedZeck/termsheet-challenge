import { createAction, props } from '@ngrx/store';
import { EstateDeal } from '../shared/models/estate-deal.interface';

export enum EstateDealActionTypes {
  LoadEstateDeals = '[EstateDeal] Load EstateDeals',
  LoadEstateDealsSuccess = '[EstateDeal] Load EstateDeals Success',
  LoadEstateDealsFailure = '[EstateDeal] Load EstateDeals Failure',

  UpdateEstateDeal = '[EstateDeal] Update EstateDeal',
  UpdateEstateDealSuccess = '[EstateDeal] Update EstateDeal Success',
  UpdateEstateDealFailure = '[EstateDeal] Update EstateDeal Failure',
}

export const loadEstateDeals = createAction(
  EstateDealActionTypes.LoadEstateDeals
);

export const loadEstateDealsSuccess = createAction(
  EstateDealActionTypes.LoadEstateDealsSuccess,
  props<{ data: EstateDeal[] }>()
);

export const loadEstateDealsFailure = createAction(
  EstateDealActionTypes.LoadEstateDealsFailure,
  props<{ error: any }>()
);

export const updateEstateDeal = createAction(
  EstateDealActionTypes.UpdateEstateDeal,
  props<{ data: EstateDeal }>()
);

export const updateEstateDealSuccess = createAction(
  EstateDealActionTypes.UpdateEstateDealSuccess,
  props<{ data: EstateDeal[] }>()
);

export const updateEstateDealFailure = createAction(
  EstateDealActionTypes.UpdateEstateDealFailure,
  props<{ error: any }>()
);
