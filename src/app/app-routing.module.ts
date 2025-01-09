import { NgModule } from '@angular/core';
import { provideRouter, RouterModule, Routes, withComponentInputBinding } from '@angular/router';
import { EMPTY_STRING, INTERNAL_PATHS } from '@data/constants/routes';

import { SkeletonComponent } from '@layout/skeleton/skeleton.component';
import { MovieModule } from '@modules/movie/movie.module';

export const routes: Routes = [
 {
  path: EMPTY_STRING,
  component: SkeletonComponent,
  children: [
   {
    path: INTERNAL_PATHS.APP_DEFAULT,
    loadChildren: () => import('@modules/movie/movie.module').then((m): typeof MovieModule => m.MovieModule),
   },
   { path: '**', redirectTo: INTERNAL_PATHS.APP_DEFAULT, pathMatch: 'full' },
  ],
 },
 { path: '**', redirectTo: INTERNAL_PATHS.APP_DEFAULT, pathMatch: 'full' },
];

@NgModule({
	imports: [RouterModule.forRoot(routes, { useHash: true })],
	exports: [RouterModule]
})
export class AppRoutingModule {}