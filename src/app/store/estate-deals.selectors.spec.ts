import { createSelector } from '@ngrx/store';
import * as fromSelectors from './estate-deals.selectors';
import { EstateDeal } from '../shared/models/estate-deal.interface';
import { EstateDealType } from '../shared/models/estate-deal-type.enum';
import { EstateDealState } from './estate-deals.reducers';

describe('Estate Deal Selectors', () => {
  const mockState: EstateDealState = {
    loading: false,
    loaded: true,
    error: '',
    data: [
      {
        dealName: 'Test Deal',
        dealType: EstateDealType.AQUISITION,
        price: 100000,
        address: 'Test Address',
        noi: 1000,
        capRate: 10,
        id: 1,
      },
      {
        dealName: 'Test Deal 2',
        dealType: EstateDealType.AQUISITION,
        price: 200000,
        address: 'Test Address 2',
        noi: 2000,
        capRate: 20,
        id: 2,
      },
    ],
    filteredData: [
      {
        dealName: 'Test Deal',
        dealType: EstateDealType.AQUISITION,
        price: 100000,
        address: 'Test Address',
        noi: 1000,
        capRate: 10,
        id: 1,
      },
    ],
    search: 'Test',
  };

  it('should select estate deals state', () => {
    const result = fromSelectors.selectEstateDealsState.projector(mockState);
    expect(result).toEqual(mockState);
  });

  it('should select filtered deals state', () => {
    const result =
      fromSelectors.getFilteredEstateDealsData.projector(mockState);
    expect(result).toEqual(mockState.filteredData);
  });
});
