import { createAction, props } from '@ngrx/store';
import { EstateDeal } from '../shared/models/estate-deal.interface';
import { EstateDealType } from '../shared/models/estate-deal-type.enum';

export enum EstateDealActionTypes {
  LoadEstateDeals = '[EstateDeal] Load EstateDeals',
  LoadEstateDealsSuccess = '[EstateDeal] Load EstateDeals Success',
  LoadEstateDealsFailure = '[EstateDeal] Load EstateDeals Failure',

  addEstateDeals = '[EstateDeal] Add EstateDeals',
  addEstateDealsSuccess = '[EstateDeal] Add EstateDeals Success',
  addEstateDealsFailure = '[EstateDeal] Add EstateDeals Failure',

  UpdateEstateDeal = '[EstateDeal] Update EstateDeal',
  UpdateEstateDealSuccess = '[EstateDeal] Update EstateDeal Success',
  UpdateEstateDealFailure = '[EstateDeal] Update EstateDeal Failure',

  FilterEstateDeals = '[EstateDeal] Filter EstateDeals',
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

export const addEstateDeals = createAction(
  EstateDealActionTypes.addEstateDeals,
  props<{ data: EstateDeal[] }>()
);

export const addEstateDealsSuccess = createAction(
  EstateDealActionTypes.addEstateDealsSuccess,
  props<{ data: EstateDeal[] }>()
);

export const addEstateDealsFailure = createAction(
  EstateDealActionTypes.addEstateDealsFailure,
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

export const filterEstateDeals = createAction(
  EstateDealActionTypes.FilterEstateDeals,
  props<{ search: string; filters: EstateDealType[] }>()
);
