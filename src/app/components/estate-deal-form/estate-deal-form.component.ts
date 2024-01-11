import { Component, Inject, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  Validators,
  ReactiveFormsModule,
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
  estateDealForm = this.formBuilder.group({
    dealName: new FormControl<string | null>(null, Validators.required),
    dealType: new FormControl<EstateDealType | null>(null),
    price: new FormControl<number | null>(null, Validators.required),
    noi: new FormControl<number | null>(null, Validators.required),
    address: new FormControl<string | null>(null, Validators.required),
  });
  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<EstateDealFormComponent>,
    private store: Store,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    if (this.data) {
      this.estateDealForm.patchValue(this.data);
    }
  }

  onSubmit() {
    if (this.estateDealForm.valid) {
      const payload: EstateDeal = {
        id: this.data?.id,
        capRate: this.data?.capRate,
        dealName: this.estateDealForm.value.dealName || this.data.dealName,
        dealType: this.estateDealForm.value.dealType || this.data.dealType,
        price: this.estateDealForm.value.price || this.data.price,
        noi: this.estateDealForm.value.noi || this.data.noi,
        address: this.estateDealForm.value.address || this.data.address,
        image: this.data?.image,
      };
      this.store.dispatch(fromActions.updateEstateDeal({ data: payload }));
      this.dialogRef.close(this.estateDealForm.value);
    }
  }

  onCancel() {
    this.dialogRef.close();
  }
}
