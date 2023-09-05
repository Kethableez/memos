import { Route } from '@angular/router';

export const LEARNING: Route[] = [
  {
    path: 'learning',
    children: [
      {
        path: 'init',
        loadComponent: () =>
          import('./components/init/init.component').then(
            (init) => init.InitComponent
          ),
      },
      {
        path: 'flow',
        loadComponent: () =>
          import('./components/flow/flow.component').then(
            (flow) => flow.FlowComponent
          ),
      },
      {
        path: 'summary',
        loadComponent: () =>
          import('./components/summary/summary.component').then(
            (summary) => summary.SummaryComponent
          ),
      },
    ],
  },
];
