import { reducer, initialState } from './estate-deals.reducers';
import * as fromActions from './estate-deals.actions';
import { EstateDeal } from '../shared/models/estate-deal.interface';
import { EstateDealType } from '../shared/models/estate-deal-type.enum';

describe('Estate Deals Reducers', () => {
  const data: EstateDeal[] = [
    {
      dealName: 'Test Deal',
      dealType: EstateDealType.AQUISITION,
      price: 100000,
      address: 'Test Address',
      noi: 1000,
      capRate: 10,
      id: 1,
    },
  ];

  it('should return the default state', () => {
    const action = {} as any;
    const state = reducer(undefined, action);
    expect(state).toBe(initialState);
  });

  it('should load estate deals', () => {
    const action = fromActions.loadEstateDeals();
    const state = reducer(initialState, action);
    expect(state.loading).toBe(true);
    expect(state.loaded).toBe(false);
  });

  it('should load estate deals success', () => {
    const action = fromActions.loadEstateDealsSuccess({ data });
    const state = reducer(initialState, action);
    expect(state.loading).toBe(false);
    expect(state.loaded).toBe(true);
    expect(state.data).toEqual(data);
    expect(state.filteredData).toEqual(data);
  });

  it('should load estate deals failure', () => {
    const error = 'Error loading estate deals';
    const action = fromActions.loadEstateDealsFailure({ error });
    const state = reducer(initialState, action);
    expect(state.loading).toBe(false);
    expect(state.loaded).toBe(false);
    expect(state.error).toEqual(error);
  });

  it('should add estate deals', () => {
    const action = fromActions.addEstateDeals({ data });
    const state = reducer(initialState, action);
    expect(state.loading).toBe(true);
    expect(state.loaded).toBe(false);
  });

  it('should add estate deals success', () => {
    const action = fromActions.addEstateDealsSuccess({ data });
    const state = reducer(initialState, action);
    expect(state.data).toEqual(data);
    expect(state.loading).toBe(false);
    expect(state.loaded).toBe(true);
    expect(state.filteredData).toEqual(data);
  });

  it('should add estate deals failure', () => {
    const error = 'Error adding estate deals';
    const action = fromActions.addEstateDealsFailure({ error });
    const state = reducer(initialState, action);
    expect(state.loading).toBe(false);
    expect(state.loaded).toBe(false);
    expect(state.error).toEqual(error);
  });

  it('should update estate deal', () => {
    const [dealMock] = data;
    const action = fromActions.updateEstateDeal({ data: dealMock });
    const state = reducer(initialState, action);
    expect(state.data).toEqual(initialState.data);
    expect(state.loading).toBe(true);
    expect(state.loaded).toBe(false);
    expect(state.filteredData).toEqual(initialState.filteredData);
  });

  it('should update estate deal success', () => {
    const action = fromActions.updateEstateDealSuccess({ data });
    const state = reducer(initialState, action);
    expect(state.data).toEqual(data);
    expect(state.loading).toBe(false);
    expect(state.loaded).toBe(true);
    expect(state.filteredData).toEqual(data);
  });

  it('should filter estate deals', () => {
    const search = 'Test';
    const action = fromActions.filterEstateDeals({
      search: search,
      filters: [EstateDealType.AQUISITION],
    });
    const state = reducer(initialState, action);
    expect(state.search).toEqual(search);
    expect(state.filteredData).toEqual([]);
  });
});
