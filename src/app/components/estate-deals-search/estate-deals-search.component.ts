import { Component, EventEmitter, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import {
  EstateDealTypeFilter,
  EstateDealsSearchFormComponent,
} from '../estate-deals-search-form/estate-deals-search-form.component';
import { EstateDealFormComponent } from '../estate-deal-form/estate-deal-form.component';

@Component({
  selector: 'ts-estate-deals-search',
  standalone: true,
  imports: [EstateDealsSearchFormComponent, MatButtonModule, MatDialogModule],
  templateUrl: './estate-deals-search.component.html',
  styleUrl: './estate-deals-search.component.scss',
})
export class EstateDealsSearchComponent {
  @Output() searchFormObject = new EventEmitter<EstateDealTypeFilter>();
  constructor(public dialog: MatDialog) {}
  userInput(event: EstateDealTypeFilter) {
    this.searchFormObject.emit(event);
  }
  openAddEstateDealDialog() {
    this.dialog.open(EstateDealFormComponent, {
      width: '600px',
      restoreFocus: false,
      autoFocus: false,
    });
  }
}
