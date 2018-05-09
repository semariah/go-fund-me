import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';
import { ListProjectsComponent } from './list-projects/list-projects.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { AdminComponent }   from './admin/admin.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'list-projects',
    component: ListProjectsComponent
  },
  {
    path: 'projects/:id',
    component: ProjectDetailComponent
  },
  {
  path: 'admin',
  component: AdminComponent
}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
