import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper/types';
import { SumouService } from '../../core/servcies/sumou/sumou.service';
import { RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-our-projects',
  standalone: true,
  imports: [RouterLink, NgClass],
  templateUrl: './our-projects.component.html',
  styleUrl: './our-projects.component.scss',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class OurProjectsComponent implements OnInit{
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

  swiperConfig: SwiperOptions = {
    breakpoints: {
      1200: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      0: {
        slidesPerView: 1,
        spaceBetween: 20,
      }
    }
  };

  toggleArrow(project: any) {
    project.arrow = !project.arrow;
  }
}
