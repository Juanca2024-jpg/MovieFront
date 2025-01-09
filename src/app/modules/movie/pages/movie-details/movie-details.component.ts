import { Component, inject, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TmdbService } from '@data/services/tmdb.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css'
})
export class MovieDetailsComponent {

  private readonly _routes = inject(ActivatedRoute)
  private readonly _tmdbService = inject(TmdbService)

  movieId: number | null = null;
  movieDetails: any;

  constructor() {}

  ngOnInit(): void {
    const idParam = this._routes.snapshot.paramMap.get('id');
    this.movieId = idParam ? +idParam : null;
    console.log('Movie ID:', this.movieId);
    if ( this.movieId != null ){
      this.fetchMovieDetails(this.movieId);
    }
  }
  
  fetchMovieDetails(movieId: number): void {
    this._tmdbService.getMovieDetails(movieId).subscribe({
      next: (data) => {
        this.movieDetails = data;
        console.log('Movie Details:', data);
      },
      error: (error) => {
        console.error('Error fetching movie details:', error);
      },
    });
  }

}
