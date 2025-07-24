import { Component, inject } from '@angular/core';
import { SumouService } from '../../core/servcies/sumou/sumou.service';
import { RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-our-project-page',
  standalone: true,
  imports: [RouterLink, NgClass],
  templateUrl: './our-project-page.component.html',
  styleUrl: './our-project-page.component.scss'
})
export class OurProjectPageComponent {
  private readonly _SumouService = inject(SumouService)

  allProject:any[] = []
  allConfiguration:any
  arrow:boolean = false

  ngOnInit():void {
    this.getAllProjects()
    this.getAllConfigurations()
  }

  getAllProjects():void{
    this._SumouService.GetAllOwnershipProjects().subscribe({
      next:(res)=>{
        this.allProject = res.data.map((project:any) => ({...project, arrow: false}));
      }
    })
  }

  getAllConfigurations():void{
    this._SumouService.GetAllConfigurations().subscribe({
      next:(res)=>{
        this.allConfiguration = res.data[0]
      }
    })
  }

  toggleArrow(project: any) {
    project.arrow = !project.arrow;
  }

}
