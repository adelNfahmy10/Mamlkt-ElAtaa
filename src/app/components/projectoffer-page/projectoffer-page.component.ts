import { Component, inject } from '@angular/core';
import { SumouService } from '../../core/servcies/sumou/sumou.service';
import { RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-projectoffer-page',
  standalone: true,
  imports: [RouterLink, NgClass],
  templateUrl: './projectoffer-page.component.html',
  styleUrl: './projectoffer-page.component.scss'
})
export class ProjectofferPageComponent {
  private readonly _SumouService = inject(SumouService)

  allProject:any[] = []
  allConfiguration:any
  arrow:boolean = false

  ngOnInit():void {
    this.getAllProjects()
    this.getAllConfigurations()
  }

  getAllProjects():void{
    this._SumouService.GetAllRealEstateOffers().subscribe({
      next:(res)=>{
        this.allProject = res.data
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
