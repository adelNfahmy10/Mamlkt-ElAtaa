import { Routes } from '@angular/router';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';
import { BlankComponent } from './layout/blank/blank.component';
import { InvestmentDetailsComponent } from './components/investment-details/investment-details.component';
import { BookComponent } from './components/book/book.component';
import { OurProjectPageComponent } from './components/our-project-page/our-project-page.component';
import { OldProjectPageComponent } from './components/old-project-page/old-project-page.component';
import { ProjectofferPageComponent } from './components/projectoffer-page/projectoffer-page.component';
import { WhoWeArePageComponent } from './components/who-we-are-page/who-we-are-page.component';
import { ContractingPageComponent } from './components/contracting-page/contracting-page.component';

export const routes: Routes = [
  {path:'', redirectTo:'blank', pathMatch:'full'},
  {path:'blank', component:BlankComponent, title:'Mamlkt Al Ataa'},
  {path:'our-project', component:OurProjectPageComponent, title:'Our Project'},
  {path:'contracting', component:ContractingPageComponent, title:'Contracting'},
  {path:'old-project', component:OldProjectPageComponent, title:'Old Project'},
  {path:'project-offer', component:ProjectofferPageComponent, title:'Projects Offers'},
  {path:'about-us', component:WhoWeArePageComponent, title:'About Us'},
  {path:'project-details/:id', component:ProjectDetailsComponent, title:'Project details'},
  {path:'previour-investment/:id', component:InvestmentDetailsComponent, title:'Investment details'},
  {path:'book/:id', component:BookComponent, title:'Book Now'}
];
