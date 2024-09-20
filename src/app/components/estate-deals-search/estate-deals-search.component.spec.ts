import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstateDealsSearchComponent } from './estate-deals-search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { provideMockStore } from '@ngrx/store/testing';
import { EstateDealTypeFilter } from '../estate-deals-search-form/estate-deals-search-form.component';
import { EstateDealType } from '../../shared/models/estate-deal-type.enum';

describe('EstateDealsSearchComponent', () => {
  let component: EstateDealsSearchComponent;
  let fixture: ComponentFixture<EstateDealsSearchComponent>;
  const initialState = { estateDeals: '' };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstateDealsSearchComponent, BrowserAnimationsModule],
      providers: [provideMockStore({ initialState })],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(EstateDealsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should open dialog when add estate deal button is clicked', () => {
    const button = fixture.debugElement.nativeElement.querySelector('button');
    jest.spyOn(component.dialog, 'open');
    button.click();
    expect(component.dialog.open).toHaveBeenCalled();
  });
  it('should emit searchFormObject when userInput() is called', () => {
    const searchFormObject: EstateDealTypeFilter = {
      type: EstateDealType.AQUISITION,
      selected: false,
    };
    jest.spyOn(component.searchFormObject, 'emit');
    component.userInput(searchFormObject);
    expect(component.searchFormObject.emit).toHaveBeenCalled();
  });
});
