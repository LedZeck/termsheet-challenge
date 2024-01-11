import { Component, Input, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { EstateDeal } from '../../shared/models/estate-deal.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'ts-estate-deals-table',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './estate-deals-table.component.html',
  styleUrl: './estate-deals-table.component.scss',
})
export class EstateDealsTableComponent implements OnInit {
  @Input() estateDeals!: EstateDeal[] | null;
  displayedColumns?: string[];
  dataSource!: EstateDeal[];
  constructor(private router: Router) {}
  ngOnInit(): void {
    this.dataSource = this.estateDeals || [];
    this.displayedColumns = this.getDisplayedColumns();
  }
  getDisplayedColumns(): string[] {
    return Object.keys(this.dataSource[0]).filter(
      (key) => key !== 'image' && key !== 'address'
    );
  }

  clickRow(otherRow: any) {
    this.router.navigate(['/deal-details', otherRow.id]);
  }
}
