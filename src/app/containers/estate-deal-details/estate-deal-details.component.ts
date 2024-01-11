import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { select } from '@ngrx/store';

import * as fromSelectors from '../../store/estate-deals.selectors';
import { EstateDeal } from '../../shared/models/estate-deal.interface';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { EstateDealFormComponent } from '../../components/estate-deal-form/estate-deal-form.component';

@Component({
  selector: 'ts-estate-deal-details',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './estate-deal-details.component.html',
  styleUrl: './estate-deal-details.component.scss',
})
export class EstateDealDetailsComponent implements OnInit {
  estateDealId!: number | null;
  estateDealDetails$ = this.store.pipe(
    select((state: any) => fromSelectors.getEstateDealsData(state))
  );
  estateDealDetails: EstateDeal | null = null;
  constructor(
    private route: ActivatedRoute,
    private store: Store,
    private dialog: MatDialog
  ) {}
  ngOnInit(): void {
    this.getDealId();
    this.getDealDetails();
  }

  private getDealId() {
    this.estateDealId = Number(this.route.snapshot.paramMap.get('id'));
  }

  private getDealDetails() {
    this.estateDealDetails$.subscribe((data) => {
      this.estateDealDetails =
        data?.find((deal: EstateDeal) => deal.id === this.estateDealId) || null;
    });
  }
  goBack() {
    window.history.back();
  }

  editDeal() {
    this.dialog.open(EstateDealFormComponent, {
      width: '600px',
      restoreFocus: false,
      autoFocus: false,
      data: this.estateDealDetails,
    });
  }
}
