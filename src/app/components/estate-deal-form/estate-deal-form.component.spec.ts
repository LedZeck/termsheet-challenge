import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstateDealFormComponent } from './estate-deal-form.component';

describe('EstateDealFormComponent', () => {
  let component: EstateDealFormComponent;
  let fixture: ComponentFixture<EstateDealFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstateDealFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EstateDealFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
