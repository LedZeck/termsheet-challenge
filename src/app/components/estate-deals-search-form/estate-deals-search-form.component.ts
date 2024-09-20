import { Component, EventEmitter, OnDestroy, Output } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';

import { EstateDealType } from '../../shared/models/estate-deal-type.enum';
import {
  Subscription,
  debounce,
  debounceTime,
  distinctUntilChanged,
} from 'rxjs';

export interface EstateDealTypeFilter {
  type: EstateDealType;
  selected: boolean;
}

@Component({
  selector: 'ts-estate-deals-search-form',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    MatSelectModule,
  ],
  templateUrl: './estate-deals-search-form.component.html',
  styleUrl: './estate-deals-search-form.component.scss',
})
export class EstateDealsSearchFormComponent implements OnDestroy {
  @Output() searchFormObject = new EventEmitter();
  private subscriptions$ = new Subscription();

  searchForm = this.formBuilder.group({
    search: new FormControl<string>(''),
    filters: new FormControl<EstateDealType[]>([]),
  });
  availableFilters: EstateDealTypeFilter[] = [
    {
      type: EstateDealType.AQUISITION,
      selected: false,
    },
    {
      type: EstateDealType.DEVELOPMENT,
      selected: false,
    },
    {
      type: EstateDealType.LEASE,
      selected: false,
    },
  ];
  constructor(private formBuilder: FormBuilder) {
    this.subscriptions$.add(
      this.searchForm.valueChanges
        .pipe(debounceTime(300), distinctUntilChanged())
        .subscribe(() => {
          this.submitSearchForm();
        })
    );
  }

  public onFilterChange(estateDealType: EstateDealType): void {
    const filter = this.availableFilters.find((f) => f.type === estateDealType);
    if (filter) {
      filter.selected = !filter.selected;
    }

    const selectedFilters = this.availableFilters
      .filter((filter) => filter.selected)
      .map((filter) => filter.type);

    this.searchForm.patchValue({ filters: selectedFilters });
  }

  submitSearchForm(): void {
    this.searchFormObject.emit(this.searchForm.value);
  }

  ngOnDestroy(): void {
    this.subscriptions$.unsubscribe();
  }
}
