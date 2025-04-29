import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./components/navigation/navigation.component').then(m => m.NavigationTestComponent)
  },
  {
    path: 'slow-loader',
    loadComponent: () => import('./components/slow-loader/slow-loader.component').then(m => m.SlowLoaderComponent)
  },
  {
    path: 'http-loader',
    loadComponent: () => import('./components/http-loader/http-loader.component').then(m => m.HttpLoaderComponent)
  },
  {
    path: 'silent-loader',
    loadComponent: () => import('./components/silent-loader/silent-loader.component').then(m => m.SilentLoaderComponent)
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];
