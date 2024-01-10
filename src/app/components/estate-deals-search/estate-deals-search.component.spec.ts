import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstateDealsSearchComponent } from './estate-deals-search.component';

describe('EstateDealsSearchComponent', () => {
  let component: EstateDealsSearchComponent;
  let fixture: ComponentFixture<EstateDealsSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstateDealsSearchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EstateDealsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
