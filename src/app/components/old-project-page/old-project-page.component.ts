import { Component } from '@angular/core';
import { OldProjectComponent } from "../old-project/old-project.component";

@Component({
  selector: 'app-old-project-page',
  standalone: true,
  imports: [OldProjectComponent],
  templateUrl: './old-project-page.component.html',
  styleUrl: './old-project-page.component.scss'
})
export class OldProjectPageComponent {
}
