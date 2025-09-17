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
  {path:'', component:BlankComponent, title:'Sumou'},
  {path:'our-project', component:OurProjectPageComponent, title:'Sumou | Our Project'},
  {path:'contracting', component:ContractingPageComponent, title:'Sumou | Contracting'},
  {path:'old-project', component:OldProjectPageComponent, title:'Sumou | Old Project'},
  {path:'project-offer', component:ProjectofferPageComponent, title:'Sumou | Projects Offers'},
  {path:'about-us', component:WhoWeArePageComponent, title:'Sumou | About Us'},
  {path:'project-details/:type/:id', component:ProjectDetailsComponent, title:'Sumou | Project details'},
  {path:'previour-investment/:id', component:InvestmentDetailsComponent, title:'Sumou | Investment details'},
  {path:'book/:id', component:BookComponent, title:'Sumou | Book Now'}
];
