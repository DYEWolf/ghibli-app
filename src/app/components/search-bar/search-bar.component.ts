import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
  @Input() movies: [];
  @Output() filterEvent = new EventEmitter<string>();
  control = new FormControl();
  filteredMovie: Observable<string[]>;
  filterInput: string = '';

  constructor() {}

  ngOnInit(): void {
    this.filteredMovie = this.control.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = this._normalizeValue(value);
    return this.movies.filter((movie) =>
      this._normalizeValue(movie).includes(filterValue)
    );
  }

  private _normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }

  movieSelected(movie): void {
    this.filterEvent.emit(movie);
  }

  filterChange(filter): void {
    this.filterEvent.emit(filter);
  }
}
