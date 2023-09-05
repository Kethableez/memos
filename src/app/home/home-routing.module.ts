import { Route } from '@angular/router';

export const HOME: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('./home.component').then((home) => home.HomeComponent),
  },
];
