import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },

  {
    path: 'login',
    loadChildren: () =>
      import('./public/public.module').then((x) => x.PublicModule),
  },
  {
    path: "",
    loadChildren: () =>
      import("./admin/admin.module").then((x) => x.AdminModule),
  },

];
