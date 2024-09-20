import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { EstateDeal } from '../../shared/models/estate-deal.interface';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ts-estate-deals-table',
  standalone: true,
  imports: [MatTableModule, CommonModule],
  templateUrl: './estate-deals-table.component.html',
  styleUrl: './estate-deals-table.component.scss',
})
export class EstateDealsTableComponent implements OnInit, OnChanges {
  @Input() estateDeals!: EstateDeal[] | null;
  displayedColumns?: string[];
  dataSource!: EstateDeal[];
  constructor(private router: Router) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (!!changes['estateDeals'].previousValue) {
      this.dataSource = changes['estateDeals'].currentValue;
      this.displayedColumns = this.getDisplayedColumns();
    }
  }

  ngOnInit(): void {
    this.dataSource = this.estateDeals || [];
    this.displayedColumns = this.getDisplayedColumns();
  }

  getDisplayedColumns(): string[] {
    if (!!this.dataSource.length) {
      return Object.keys(this.dataSource[0]).filter(
        (key) => key !== 'image' && key !== 'address'
      );
    }
    return [];
  }

  clickRow(row: any) {
    this.router.navigate(['/deal-details', row.id]);
  }
}
