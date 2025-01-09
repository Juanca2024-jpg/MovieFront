import { Component, Input } from '@angular/core';
import { TmdbService } from '@data/services/tmdb.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
})
export class MovieListComponent {
  @Input() movies: any[] = [];

  constructor(private tmdbService: TmdbService) {}

  getImageUrl(path: string): string {
    return this.tmdbService.getImageUrl(path);
  }
}
