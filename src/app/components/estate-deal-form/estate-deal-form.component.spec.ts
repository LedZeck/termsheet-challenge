import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { EstateDealFormComponent } from './estate-deal-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { EstateDealType } from '../../shared/models/estate-deal-type.enum';

describe('EstateDealFormComponent', () => {
  let component: EstateDealFormComponent;
  let fixture: ComponentFixture<EstateDealFormComponent>;
  const initialState = { estateDeals: '' };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstateDealFormComponent, BrowserAnimationsModule],
      providers: [
        {
          provide: MatDialogRef,
          useValue: {
            close: jest.fn(),
          },
        },
        { provide: MAT_DIALOG_DATA, useValue: {} },
        provideMockStore({ initialState }),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(EstateDealFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have a form with 5 controls', () => {
    expect(Object.keys(component.estateDealForm.controls).length).toEqual(5);
  });
  it('should make the dealName control required', () => {
    let control = component.estateDealForm.get('dealName');
    control?.setValue('');
    expect(control?.valid).toBeFalsy();
  });
  it('should make the price control required', () => {
    let control = component.estateDealForm.get('price');
    control?.setValue(null);
    expect(control?.valid).toBeFalsy();
  });
  it('should make the noi control required', () => {
    let control = component.estateDealForm.get('noi');
    control?.setValue(null);
    expect(control?.valid).toBeFalsy();
  });
  it('should make the address control required', () => {
    let control = component.estateDealForm.get('address');
    control?.setValue('');
    expect(control?.valid).toBeFalsy();
  });
  it('should dispatch form values and close dialog once submit button', () => {
    const store = TestBed.inject(Store);
    jest.spyOn(store, 'dispatch').mockImplementation(() => {});
    const dialogRef = TestBed.inject(MatDialogRef);
    jest.spyOn(dialogRef, 'close').mockImplementation(() => {});
    component.estateDealForm.patchValue({
      dealName: 'test',
      dealType: EstateDealType.AQUISITION,
      price: 1,
      noi: 1,
      address: 'test',
    });
    component.onSubmit();
    expect(store.dispatch).toHaveBeenCalled();
    expect(dialogRef.close).toHaveBeenCalled();
  });
  it('should close the dialog when onCancel is clicked', () => {
    const dialogRef = TestBed.inject(MatDialogRef);
    jest.spyOn(dialogRef, 'close').mockImplementation(() => {});
    component.onCancel();
    expect(dialogRef.close).toHaveBeenCalled();
  });
});
