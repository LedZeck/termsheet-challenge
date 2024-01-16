import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstateDealDetailsComponent } from './estate-deal-details.component';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { provideMockStore } from '@ngrx/store/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MockProvider } from 'ngx-mock-provider';

describe('EstateDealDetailsComponent', () => {
  let component: EstateDealDetailsComponent;
  let fixture: ComponentFixture<EstateDealDetailsComponent>;
  const initialState = { estateDeals: '' };
  let mockActivatedRoute: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstateDealDetailsComponent, RouterTestingModule],
      providers: [
        MockProvider({
          provider: ActivatedRoute,
          methods: ['snapshot', 'params', 'get'],
        }),
        provideMockStore({ initialState }),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(EstateDealDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
