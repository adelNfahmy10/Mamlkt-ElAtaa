import { AfterViewInit, Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { HomeComponent } from "./components/home/home.component";
import { OurProjectsComponent } from "./components/our-projects/our-projects.component";
import { ContractingComponent } from "./components/contracting/contracting.component";
import { PartenersComponent } from "./components/parteners/parteners.component";
import { WhoWeAreComponent } from "./components/who-we-are/who-we-are.component";
import { NgwWowService } from 'ngx-wow';
import { FooterComponent } from "./components/footer/footer.component";
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, HomeComponent, OurProjectsComponent, ContractingComponent, PartenersComponent, WhoWeAreComponent, FooterComponent, NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'MAMLKT-ELATAA';
  constructor(private wowService:NgwWowService){
    this.wowService.init()
  }

  showArrow:boolean = false
  @HostListener('window:scroll') onScroll(){
    let scrollPosition = window.scrollY;
    if (scrollPosition > 300) {
      this.showArrow = true
    } else {
      this.showArrow = false
    }
  }
}
