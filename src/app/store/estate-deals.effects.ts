import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map } from 'rxjs/operators';
import * as fromActions from './estate-deals.actions';

@Injectable()
export class EstateDealsEffects {
  loadEstateDeals$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromActions.loadEstateDeals),
      map((action) => {
        return fromActions.loadEstateDealsSuccess({ data: [] });
      })
    );
  });
  constructor(private actions$: Actions) {}
}
