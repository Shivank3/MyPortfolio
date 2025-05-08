import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./components/home/home.component').then(c => c.HomeComponent)
  },
  {
    path: 'about',
    loadComponent: () => import('./components/about/about.component').then(c => c.AboutComponent)
  },
  {
    path: 'projects',
    loadComponent: () => import('./components/projects/projects.component').then(c => c.ProjectsComponent)
  },
  {
    path: 'projects/:id',
    loadComponent: () => import('./components/projects/project-detail/project-detail.component').then(c => c.ProjectDetailComponent)
  },
  {
    path: 'contact',
    loadComponent: () => import('./components/contact/contact.component').then(c => c.ContactComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];