import { Routes } from '@angular/router';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';
import { BlankComponent } from './layout/blank/blank.component';
import { InvestmentDetailsComponent } from './components/investment-details/investment-details.component';
import { BookComponent } from './components/book/book.component';

export const routes: Routes = [
  {path:'', component:BlankComponent, title:'Mamlkt Al Ataa'},
  {path:'project-details/:id', component:ProjectDetailsComponent, title:'Project details'},
  {path:'previour-investment/:id', component:InvestmentDetailsComponent, title:'Investment details'},
  {path:'book/:id', component:BookComponent, title:'Book Now'}
];
