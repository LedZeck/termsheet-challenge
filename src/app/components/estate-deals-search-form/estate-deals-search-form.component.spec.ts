import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstateDealsSearchFormComponent } from './estate-deals-search-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('EstateDealsSearchFormComponent', () => {
  let component: EstateDealsSearchFormComponent;
  let fixture: ComponentFixture<EstateDealsSearchFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstateDealsSearchFormComponent, BrowserAnimationsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(EstateDealsSearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have a form with 2 controls', () => {
    const formControlsLength = Object.keys(component.searchForm.value).length;
    expect(formControlsLength).toBe(2);
  });
  it('should emit an object after user interact', () => {
    jest.spyOn(component.searchFormObject, 'emit');
    component.searchForm.patchValue({
      search: 'test',
    });
    component.submitSearchForm();
    expect(component.searchFormObject.emit).toHaveBeenCalled();
    expect(component.searchFormObject.emit).toHaveBeenCalledWith({
      search: 'test',
      filters: [],
    });
  });
});
