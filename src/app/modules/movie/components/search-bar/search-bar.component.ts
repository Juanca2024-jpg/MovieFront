import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter, map } from 'rxjs';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent implements OnInit {
  
  query = new FormControl();
  @Output() search = new EventEmitter<string>();

  ngOnInit() {
    this.query.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      map(value => value.trim()),
      filter(value => value.length > 0)
    ).subscribe(value => {
      this.search.emit(value);
    });
  }
}
