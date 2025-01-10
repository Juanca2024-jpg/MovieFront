import { Component, inject, Inject, IterableDiffers } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieDetails } from '@data/interfaces/movie-details';
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
  movieDetails:MovieDetails={
    adult: false,
    backdrop_path: '',
    belongs_to_collection: '',
    budget: 0,
    genres: [],
    homepage: '',
    id: 0,
    original_country: [],
    original_language: '',
    original_title: '',
    overview: '',
    popularity: 0,
    poster_path: '',
    production_companies: [],
    production_countries: [],
    release_date: '',
    runtime: 0,
    spoken_languages: [],
    status: '',
    tag_line: '',
    title: ''
  };
  languages:string='';

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

  getImagen(path: string): string{
    return this._tmdbService.getImageUrl(path);
  }
  getDuracion(tiempo:number){
    if(tiempo<60){
      return String(tiempo)+' min';
    }else{
      let resultado = 0;
      let bandera = true;
      let duracion = tiempo;
      while(bandera){
        if(duracion>=60){
          resultado += 1;
          duracion = duracion-60
        }else{
          bandera = false;
        }
      }
      return String(resultado)+' h'+duracion+' min'
    }
  }
  getCompaniasProduccion(companias:{id: number,logo_path: string,name: string,origin_country: string}[]){
    return companias.map(item=> item.name).join(', ');
  }
  getPaisesProduccion(paises:{iso_3166_1:string,name:string}[]){
    return paises.map(item => item.name).join(", ");
  }
  getGeneros(generos:{id:number,name:string}[]){
    return generos.map(item=> item.name).join(', ');
  }
  getLenguajes(lenguajes:{name:string}[]){
    return lenguajes.map(item=>item.name).join(', ');
  }

}