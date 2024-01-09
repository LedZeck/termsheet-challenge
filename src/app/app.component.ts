import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromActions from './store/estate-deals.actions';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'termsheet-challenge';
  constructor(private store: Store) {}
  ngOnInit() {
    console.log('ngOnInit');
    this.store.dispatch(fromActions.loadEstateDeals());
  }
}
