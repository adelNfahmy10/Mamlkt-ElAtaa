import { AfterViewInit, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { HomeComponent } from "./components/home/home.component";
import { OurProjectsComponent } from "./components/our-projects/our-projects.component";
import { ContractingComponent } from "./components/contracting/contracting.component";
import { PartenersComponent } from "./components/parteners/parteners.component";
import { WhoWeAreComponent } from "./components/who-we-are/who-we-are.component";
import { NgwWowService } from 'ngx-wow';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, HomeComponent, OurProjectsComponent, ContractingComponent, PartenersComponent, WhoWeAreComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'MAMLKT-ELATAA';
  constructor(private wowService:NgwWowService){
    this.wowService.init()
  }
}
