import { Component } from '@angular/core';
import { OurProjectsComponent } from '../our-projects/our-projects.component';

@Component({
  selector: 'app-our-project-page',
  standalone: true,
  imports: [OurProjectsComponent],
  templateUrl: './our-project-page.component.html',
  styleUrl: './our-project-page.component.scss'
})
export class OurProjectPageComponent {
}
