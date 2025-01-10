import { Component, inject, Input } from '@angular/core';
import { IMAGEN_BASE, MAX_DESCRIPCION, MAX_TITLE } from '@data/constants/movie';
import { MovieCardDetails, MovieDetails } from '@data/interfaces/movie-details';
import { TmdbService } from '@data/services/tmdb.service';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.css'
})
export class MovieCardComponent {

  private readonly _tmdbService = inject(TmdbService);

  @Input() movie : MovieCardDetails = {
    id: 0,
    original_title: '',
    overview: '',
    poster_path: '',
    release_date: ''
  };

  getImage(path: string): string{
    if (path == null || ''){
      console.log(path)
      return IMAGEN_BASE;
    }
    return this._tmdbService.getImageUrl(path);
  }

  maxTitle(title: string): string{
    if( title.length > MAX_TITLE){
      return `${title.substring(0,MAX_TITLE)}...`
    }
    return title;
  }

  maxDescription(sinosis: string): string{
    if( sinosis.length > MAX_DESCRIPCION){
      return `${sinosis.substring(0,MAX_DESCRIPCION)}...`
    }
    return sinosis;
  }

}
