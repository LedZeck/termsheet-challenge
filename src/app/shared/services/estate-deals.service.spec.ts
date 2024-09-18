import { TestBed } from '@angular/core/testing';
import { EstateDealsService } from './estate-deals.service';
import { EstateDeal } from '../models/estate-deal.interface';
import { estateDealsMock } from '../utils/estate-deals-mock';
import { of } from 'rxjs';
import { EstateDealType } from '../models/estate-deal-type.enum';

describe('EstateDealsService', () => {
  let service: EstateDealsService;
  const dataMock: EstateDeal[] = [
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

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EstateDealsService],
    });
    service = TestBed.inject(EstateDealsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a list of estate deals', (done) => {
    service.getEstateDeals().subscribe((estateDeals: EstateDeal[]) => {
      expect(estateDeals).toEqual(estateDealsMock);
      expect(estateDeals.length).toBe(estateDealsMock.length);
      done();
    });
  });

  it('should add and return the new list of estate deals', (done) => {
    const newEstateDeals: EstateDeal[] = [dataMock[0]];

    service
      .addEstateDeals(newEstateDeals)
      .subscribe((estateDeals: EstateDeal[]) => {
        expect(estateDeals).toEqual(newEstateDeals);
        expect(estateDeals.length).toBe(newEstateDeals.length);
        done();
      });
  });
});
