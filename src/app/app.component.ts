import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromActions from './store/estate-deals.actions';
import { MainComponent } from './containers/main/main.component';
import { EstateDealsComponent } from './containers/estate-deals/estate-deals.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MainComponent, EstateDealsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'termsheet-challenge';
  constructor(private store: Store) {}
  ngOnInit() {
    this.store.dispatch(fromActions.loadEstateDeals());
  }
}
