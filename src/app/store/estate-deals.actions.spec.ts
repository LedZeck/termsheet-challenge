import * as fromActions from './estate-deals.actions';

import { EstateDeal } from '../shared/models/estate-deal.interface';
import { EstateDealType } from '../shared/models/estate-deal-type.enum';

describe('Estate Deals Actions', () => {
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

  it('should create an action to load estate deals', () => {
    const action = fromActions.loadEstateDeals();
    expect(action.type).toEqual(
      fromActions.EstateDealActionTypes.LoadEstateDeals
    );
  });

  it('should create an action to load estate deals success', () => {
    const action = fromActions.loadEstateDealsSuccess({ data });
    expect(action.type).toEqual(
      fromActions.EstateDealActionTypes.LoadEstateDealsSuccess
    );
    expect(action.data).toEqual(data);
  });

  it('should create an action to load estate deals failure', () => {
    const error = 'Error loading estate deals';
    const action = fromActions.loadEstateDealsFailure({ error });
    expect(action.type).toEqual(
      fromActions.EstateDealActionTypes.LoadEstateDealsFailure
    );
    expect(action.error).toEqual(error);
  });

  it('should create an action to add estate deals', () => {
    const action = fromActions.addEstateDeals({ data });
    expect(action.type).toEqual(
      fromActions.EstateDealActionTypes.addEstateDeals
    );
    expect(action.data).toEqual(data);
  });

  it('should create an action to add estate deals success', () => {
    const action = fromActions.addEstateDealsSuccess({ data: data });
    expect(action.type).toEqual(
      fromActions.EstateDealActionTypes.addEstateDealsSuccess
    );
    expect(action.data).toEqual(data);
  });

  it('should create an action to add estate deals failure', () => {
    const error = 'Error adding estate deals';
    const action = fromActions.addEstateDealsFailure({ error });
    expect(action.type).toEqual(
      fromActions.EstateDealActionTypes.addEstateDealsFailure
    );
    expect(action.error).toEqual(error);
  });

  it('should create an action to update estate deal', () => {
    const [dealMock] = data;
    const action = fromActions.updateEstateDeal({ data: dealMock });
    expect(action.type).toEqual(
      fromActions.EstateDealActionTypes.UpdateEstateDeal
    );
    expect(action.data).toEqual(dealMock);
  });

  it('should create an action to update estate deal success', () => {
    const action = fromActions.updateEstateDealSuccess({ data });
    expect(action.type).toEqual(
      fromActions.EstateDealActionTypes.UpdateEstateDealSuccess
    );
    expect(action.data).toEqual(data);
  });

  it('should create an action to update estate deal failure', () => {
    const error = 'Error updating estate deal';
    const action = fromActions.updateEstateDealFailure({ error });
    expect(action.type).toEqual(
      fromActions.EstateDealActionTypes.UpdateEstateDealFailure
    );
    expect(action.error).toEqual(error);
  });

  it('should create a filter estate deals action', () => {
    const search = 'Test';
    const filters = [EstateDealType.AQUISITION];
    const action = fromActions.filterEstateDeals({ search, filters });
    expect(action.type).toBe(
      fromActions.EstateDealActionTypes.FilterEstateDeals
    );
    expect(action.search).toEqual(search);
    expect(action.filters).toEqual(filters);
  });
});
