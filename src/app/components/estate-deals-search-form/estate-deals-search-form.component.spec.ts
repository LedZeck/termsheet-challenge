import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstateDealsSearchFormComponent } from './estate-deals-search-form.component';

describe('EstateDealsSearchFormComponent', () => {
  let component: EstateDealsSearchFormComponent;
  let fixture: ComponentFixture<EstateDealsSearchFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstateDealsSearchFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EstateDealsSearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
