import { Routes } from '@angular/router';
import { EstateDealsComponent } from './containers/estate-deals/estate-deals.component';
import { EstateDealDetailsComponent } from './containers/estate-deal-details/estate-deal-details.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'deals',
    pathMatch: 'full',
  },
  {
    path: 'deals',
    component: EstateDealsComponent,
  },
  {
    path: 'deal-details/:id',
    component: EstateDealDetailsComponent,
  },
];
