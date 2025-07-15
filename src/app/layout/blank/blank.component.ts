import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { HomeComponent } from "../../components/home/home.component";
import { OurProjectsComponent } from "../../components/our-projects/our-projects.component";
import { ProjectofferComponent } from "../../components/projectoffer/projectoffer.component";
import { ContractingComponent } from "../../components/contracting/contracting.component";
import { WhoWeAreComponent } from "../../components/who-we-are/who-we-are.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { OldProjectComponent } from "../../components/old-project/old-project.component";

@Component({
  selector: 'app-blank',
  standalone: true,
  imports: [NavbarComponent, HomeComponent, OurProjectsComponent, ProjectofferComponent, ContractingComponent, WhoWeAreComponent, FooterComponent, OldProjectComponent],
  templateUrl: './blank.component.html',
  styleUrl: './blank.component.scss'
})
export class BlankComponent {

}
