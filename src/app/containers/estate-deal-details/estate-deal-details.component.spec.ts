import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstateDealDetailsComponent } from './estate-deal-details.component';

describe('EstateDealDetailsComponent', () => {
  let component: EstateDealDetailsComponent;
  let fixture: ComponentFixture<EstateDealDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstateDealDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EstateDealDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
