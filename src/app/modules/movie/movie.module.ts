import { NgModule } from '@angular/core';

import { MovieRoutingModule } from './movie-routing.module';
import { SharedModule } from '@shared/shared.module';
import { HomeComponent } from './pages/home/home.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';
import { PaginationComponent } from "./components/pagination/pagination.component";
import { MovieCardComponent } from './components/movie-card/movie-card.component';


@NgModule({
 declarations: [
    HomeComponent, 
    SearchBarComponent, 
    MovieListComponent, 
    MovieDetailsComponent,
    MovieCardComponent,
    PaginationComponent,
],
 imports: [SharedModule, MovieRoutingModule],
})

export class MovieModule {}