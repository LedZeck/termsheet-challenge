import { Component } from '@angular/core';
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
import { MatDialogRef } from '@angular/material/dialog';

import { EstateDealType } from '../../shared/models/estate-deal-type.enum';

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
  ],
  templateUrl: './estate-deal-form.component.html',
  styleUrl: './estate-deal-form.component.scss',
})
export class EstateDealFormComponent {
  estateDealForm = this.formBuilder.group({
    name: ['', Validators.required],
    dealType: new FormControl<EstateDealType | null>(null),
    price: ['', Validators.required],
    noi: ['', Validators.required],
    address: ['', Validators.required],
  });
  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<EstateDealFormComponent>
  ) {}

  onSubmit() {
    console.log('submit');
  }

  onCancel() {
    console.log('cancel');
    this.dialogRef.close();
  }
}
