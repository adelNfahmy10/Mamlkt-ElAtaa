import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { HomeComponent } from "../../components/home/home.component";
import { OurProjectsComponent } from "../../components/our-projects/our-projects.component";
import { ProjectofferComponent } from "../../components/projectoffer/projectoffer.component";
import { ContractingComponent } from "../../components/contracting/contracting.component";
import { WhoWeAreComponent } from "../../components/who-we-are/who-we-are.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-blank',
  standalone: true,
  imports: [NavbarComponent, HomeComponent, OurProjectsComponent, ProjectofferComponent, ContractingComponent, WhoWeAreComponent, FooterComponent],
  templateUrl: './blank.component.html',
  styleUrl: './blank.component.scss'
})
export class BlankComponent {

}
