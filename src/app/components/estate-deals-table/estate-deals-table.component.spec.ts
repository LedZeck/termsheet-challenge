import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstateDealsTableComponent } from './estate-deals-table.component';

describe('EstateDealsTableComponent', () => {
  let component: EstateDealsTableComponent;
  let fixture: ComponentFixture<EstateDealsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstateDealsTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EstateDealsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
