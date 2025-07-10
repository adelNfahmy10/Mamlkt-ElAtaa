import { Routes } from '@angular/router';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';
import { BlankComponent } from './layout/blank/blank.component';

export const routes: Routes = [
  {path:'', component:BlankComponent, title:'Mamlkt Al Ataa'},
  {path:'project-details/:id', component:ProjectDetailsComponent, title:'Project details'}

];
