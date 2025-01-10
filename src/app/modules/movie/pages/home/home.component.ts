import { ViewportScroller } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TmdbService } from '@data/services/tmdb.service';
import { PopupService } from '@shared/services/popup.service';
import { SharedModule } from '@shared/shared.module';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {

  private readonly _tmdbService = inject(TmdbService);
  private readonly _viewportScroller = inject(ViewportScroller);
  private readonly _popupSerice = inject(PopupService);

  movies: any[] = [];
  query: string = '';
  page: number = 1;
  total_page: number = 0;

  onSearch(query: string) { 
    this._tmdbService.searchMovies(query, this.page).subscribe({
      next: (response) => {
        this.query = query;   
        this.movies = response.results;
        this.page = response.page;
        this.total_page = response.total_pages;
      },
      error: (error) => {
        console.log(error);
        this._popupSerice.showError(error.error.status_message);
        console.error('Error fetching movies:', error);
      }
    });
  }

  changePage(page: string){
    this.page = +page;
    this.movies = [];
    this.onSearch(this.query);
    this._viewportScroller.scrollToPosition([0, 0]);
  }
}
