import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstateDealsComponent } from './estate-deals.component';
import { provideMockStore } from '@ngrx/store/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('EstateDealsComponent', () => {
  let component: EstateDealsComponent;
  let fixture: ComponentFixture<EstateDealsComponent>;
  const initialState = { estateDeals: '' };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstateDealsComponent, BrowserAnimationsModule],
      providers: [provideMockStore({ initialState })],
    }).compileComponents();

    fixture = TestBed.createComponent(EstateDealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
