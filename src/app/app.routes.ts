import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./pages/dashboard/dashboard.page').then((m) => m.DashboardPage),
  },
  {
    path: 'movies-list',
    loadComponent: () =>
      import('./pages/movies-list/movies-list.page').then(
        (m) => m.MoviesListPage
      ),
  },
];
