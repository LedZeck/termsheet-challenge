import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromSelectors from '../../store/estate-deals.selectors';
import * as fromActions from '../../store/estate-deals.actions';
import { CommonModule } from '@angular/common';
import { State } from '../../store/';
import { EstateDealsService } from '../../shared/services/estate-deals.service';
import { EstateDealsSearchComponent } from '../../components/estate-deals-search/estate-deals-search.component';
import { EstateDealsTableComponent } from '../../components/estate-deals-table/estate-deals-table.component';
import { EstateDealTypeFilter } from '../../components/estate-deals-search-form/estate-deals-search-form.component';
import { EstateDeal } from '../../shared/models/estate-deal.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'estate-deals',
  standalone: true,
  imports: [
    CommonModule,
    EstateDealsSearchComponent,
    EstateDealsTableComponent,
  ],
  templateUrl: './estate-deals.component.html',
  styleUrl: './estate-deals.component.scss',
})
export class EstateDealsComponent implements OnInit, OnDestroy {
  public estateDeals$ = this.store.pipe(
    select(fromSelectors.getFilteredEstateDealsData)
  );
  filteredEstateDeals: EstateDeal[] = [];
  estateDeals: EstateDeal[] = [];
  subscriptions$ = new Subscription();
  constructor(
    private store: Store<State>,
    private estateDealsService: EstateDealsService
  ) {}

  ngOnInit(): void {
    this.estateDeals$.subscribe((data) => {
      this.estateDeals = data;
    });
  }
  search(event: any) {
    this.store.dispatch(
      fromActions.filterEstateDeals({
        search: event.search as any,
        filters: event.filters as any,
      })
    );
    this.subscriptions$.add(
      this.store
        .pipe(
          select((state: State) =>
            fromSelectors.getFilteredEstateDealsData(state)
          )
        )
        .subscribe((data) => {
          if (data) {
            this.estateDeals = data;
          }
        })
    );
  }
  ngOnDestroy(): void {
    this.subscriptions$.unsubscribe();
  }
}
