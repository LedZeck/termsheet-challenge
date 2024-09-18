import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstateDealsTableComponent } from './estate-deals-table.component';
import { EstateDealType } from '../../shared/models/estate-deal-type.enum';
import { Router } from '@angular/router';

describe('EstateDealsTableComponent', () => {
  const dataSourceMock = {
    id: 1,
    dealName: 'test',
    dealType: EstateDealType.AQUISITION,
    price: 1,
    noi: 1,
    address: 'test',
    capRate: 1,
  };

  let component: EstateDealsTableComponent;
  let fixture: ComponentFixture<EstateDealsTableComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstateDealsTableComponent],
      providers: [{ provide: Router, useValue: { navigate: jest.fn() } }],
    }).compileComponents();

    fixture = TestBed.createComponent(EstateDealsTableComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    component.dataSource = [];
    expect(component).toBeTruthy();
  });

  it('should have a table with 0 columns and 0 rows', () => {
    component.dataSource = [];
    const tableColumnsLength = component.displayedColumns?.length;
    expect(tableColumnsLength).toBe(0);
    const tableRowsLength = component.dataSource?.length;
    expect(tableRowsLength).toBe(0);
  });
  it('should have a table with 6 columns and 2 rows', () => {
    component.estateDeals = [dataSourceMock, dataSourceMock];
    component.ngOnInit();
    const tableColumnsLength = component.displayedColumns?.length;
    const tableRowsLength = component.dataSource?.length;
    expect(tableColumnsLength).toBe(6);
    expect(tableRowsLength).toBe(2);
  });

  it('should get the correct columns', () => {
    let displayedColumns = Object.keys(dataSourceMock);
    displayedColumns = displayedColumns.filter(
      (element) => element !== 'address'
    );
    component.estateDeals = [dataSourceMock];
    component.ngOnInit();
    const tableDisplayedColumns = component.getDisplayedColumns();
    expect(tableDisplayedColumns).toStrictEqual(displayedColumns);
  });

  it('should call navigate when a table row is clicked', () => {
    component.estateDeals = [dataSourceMock, dataSourceMock];
    component.ngOnInit();

    component.clickRow(dataSourceMock);
    expect(router.navigate).toHaveBeenCalledWith([
      '/deal-details',
      dataSourceMock.id,
    ]);
  });
});
