import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';
import { MovieDetails } from '@data/interfaces/movie-details';

@Injectable({
  providedIn: 'root',
})
export class TmdbService {
  private readonly API_URL = 'https://api.themoviedb.org/3/movie';
  private readonly BEARER_TOKEN = environment.tmdbBearerToken;

  constructor(private http: HttpClient) {}

 /*  searchMovies(query: string, page: number = 1): Observable<any> {
    return this.http.get(`${this.baseUrl}/search/movie`, {
      params: {
        api_key: this.apiKey,
        query: query,
        page: page.toString(),
      },
    });
  }
 */
  
  getMovieDetails(movieId: number): Observable<MovieDetails> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.BEARER_TOKEN}`,
      Accept: 'application/json',
    });

    return this.http.get<MovieDetails>(`${this.API_URL}/${movieId}?language=en-US`, { headers });
  }

  getImageUrl(path: string): string {
    return `https://image.tmdb.org/t/p/w500${path}`;
  }
}
