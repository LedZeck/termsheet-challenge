import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap, withLatestFrom } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';
import * as fromActions from './estate-deals.actions';
import * as fromSelectors from './estate-deals.selectors';
import { EstateDealsService } from '../shared/services/estate-deals.service';

@Injectable()
export class EstateDealsEffects {
  loadEstateDeals$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromActions.loadEstateDeals),
      switchMap((action) =>
        this.estateDealsService
          .getEstateDeals()
          .pipe(map((data) => fromActions.loadEstateDealsSuccess({ data })))
      )
    );
  });

  updateEstateDeal$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromActions.updateEstateDeal),
      withLatestFrom(this.store.pipe(select(fromSelectors.getEstateDealsData))),
      map(([action, estateDeals]) => {
        const estateDeal = estateDeals.find(
          (deal) => deal.id === action.data.id
        );
        if (estateDeal) {
          const index = estateDeals.indexOf(estateDeal);
          const payload = [
            ...estateDeals.slice(0, index),
            action.data,
            ...estateDeals.slice(index + 1),
          ];

          return fromActions.updateEstateDealSuccess({ data: payload });
        }
        return fromActions.updateEstateDealFailure({
          error: 'Estate deal not found',
        });
      })
    );
  });

  constructor(
    private actions$: Actions,
    private estateDealsService: EstateDealsService,
    private store: Store<any>
  ) {}
}
