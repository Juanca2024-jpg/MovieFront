import { Component, inject, Input } from '@angular/core';
import { TmdbService } from '@data/services/tmdb.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent {
  @Input() movies: any[] = [];
  
}
