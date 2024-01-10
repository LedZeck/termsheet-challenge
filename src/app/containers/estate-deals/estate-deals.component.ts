import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromSelectors from '../../store/estate-deals.selectors';
import { CommonModule } from '@angular/common';
import { State } from '../../store/';
import { EstateDealsService } from '../../shared/services/estate-deals.service';
import { EstateDealsSearchComponent } from '../../components/estate-deals-search/estate-deals-search.component';
import { EstateDealsTableComponent } from '../../components/estate-deals-table/estate-deals-table.component';

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
export class EstateDealsComponent {
  public estateDeals$ = this.store.pipe(
    select((state: State) => fromSelectors.getEstateDealsData(state))
  );
  constructor(
    private store: Store<State>,
    private estateDealsService: EstateDealsService
  ) {
    this.estateDeals$.subscribe((data) => {
      // console.log(data);
    });
    this.estateDealsService.getEstateDeals().subscribe((data) => {
      // console.log(data);
    });
  }
}
