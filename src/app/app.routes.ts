import { Routes } from '@angular/router';
import { EstateDealsComponent } from './containers/estate-deals/estate-deals.component';

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
];
