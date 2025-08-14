import { Component } from '@angular/core';
import { ProjectofferComponent } from "../projectoffer/projectoffer.component";

@Component({
  selector: 'app-projectoffer-page',
  standalone: true,
  imports: [ProjectofferComponent],
  templateUrl: './projectoffer-page.component.html',
  styleUrl: './projectoffer-page.component.scss'
})
export class ProjectofferPageComponent {
}
