import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstateDealsComponent } from './estate-deals.component';

describe('EstateDealsComponent', () => {
  let component: EstateDealsComponent;
  let fixture: ComponentFixture<EstateDealsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstateDealsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EstateDealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
