import { Component, Inject, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  Validators,
  ReactiveFormsModule,
  FormArray,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialogContent,
} from '@angular/material/dialog';
import { Store } from '@ngrx/store';

import * as fromActions from '../../store/estate-deals.actions';

import { EstateDealType } from '../../shared/models/estate-deal-type.enum';
import { EstateDeal } from '../../shared/models/estate-deal.interface';

@Component({
  selector: 'ts-estate-deal-form',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatButtonModule,
    MatDialogContent,
  ],
  templateUrl: './estate-deal-form.component.html',
  styleUrl: './estate-deal-form.component.scss',
})
export class EstateDealFormComponent implements OnInit {
  data: EstateDeal[] = [];
  estateDealForm = this.formBuilder.group({
    deals: this.formBuilder.array([]),
  });
  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<EstateDealFormComponent>,
    private store: Store,
    @Inject(MAT_DIALOG_DATA) public injectedData: any
  ) {
    this.data = [injectedData] || [];
  }

  ngOnInit(): void {
    if (this.data) {
      this.data.forEach((deal: EstateDeal) => {
        this.addDealForm(deal);
      });
    } else {
      this.addDealForm();
    }
  }

  get dealTypes() {
    return Object.values(EstateDealType);
  }

  get deals() {
    return this.estateDealForm.get('deals') as FormArray;
  }

  addDealForm(deal?: EstateDeal) {
    if (this.estateDealForm.invalid) {
      return;
    }
    const dealForm = this.formBuilder.group({
      dealName: new FormControl(deal?.dealName || null, Validators.required),
      dealType: new FormControl(deal?.dealType || null),
      price: new FormControl(deal?.price || null, Validators.required),
      noi: new FormControl(deal?.noi || null, Validators.required),
      address: new FormControl(deal?.address || null, Validators.required),
    });
    this.deals.push(dealForm);
  }

  removeDealForm(index: number) {
    this.deals.removeAt(index);
  }

  onSubmit() {
    if (this.estateDealForm.valid) {
      const [dealToEdit] = this.data;
      const randomId = Math.floor(Math.random() * 1000);
      const randomCapRate = Math.floor(Math.random() * 100);
      const payload: EstateDeal[] = this.deals.value.map(
        (deal: EstateDeal, index: number) => ({
          id: this.data?.[index]?.id || randomId,
          capRate: this.data?.[index]?.capRate || randomCapRate,
          dealName: deal.dealName || this.data?.[index]?.dealName,
          dealType: deal.dealType || this.data?.[index]?.dealType,
          price: deal.price || this.data?.[index]?.price,
          noi: deal.noi || this.data?.[index]?.noi,
          address: deal.address || this.data?.[index]?.address,
          image: this.data?.[index]?.image,
        })
      );
      if (dealToEdit) {
        const [firstDeal] = payload;
        this.store.dispatch(fromActions.updateEstateDeal({ data: firstDeal }));
      } else {
        this.store.dispatch(fromActions.addEstateDeals({ data: payload }));
      }
      this.dialogRef.close(this.estateDealForm.value);
    }
  }

  onCancel() {
    this.dialogRef.close();
  }
}
