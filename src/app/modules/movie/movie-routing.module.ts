import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'movie/:id', component: MovieDetailsComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
 imports: [RouterModule.forChild(routes)],
 exports: [RouterModule],
})

export class MovieRoutingModule {}