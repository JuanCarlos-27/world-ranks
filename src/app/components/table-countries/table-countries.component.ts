import { Country } from '@/interfaces/country.interface';
import {
  DecimalPipe,
  NgComponentOutlet,
  NgTemplateOutlet,
} from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'countries-table',
  standalone: true,
  imports: [DecimalPipe, NgTemplateOutlet],
  templateUrl: './table-countries.component.html',
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableCountriesComponent {
  @Input({ required: true }) countries: Country[] = [];
  @Input({ required: true }) headers: string[] = [];
}
