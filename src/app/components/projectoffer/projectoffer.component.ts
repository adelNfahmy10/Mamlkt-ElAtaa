import { Component, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import { SumouService } from '../../core/servcies/sumou/sumou.service';
import { SwiperOptions } from 'swiper/types';
import { RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-projectoffer',
  standalone: true,
  imports: [RouterLink, NgClass],
  templateUrl: './projectoffer.component.html',
  styleUrl: './projectoffer.component.scss',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class ProjectofferComponent {
  private readonly _SumouService = inject(SumouService)

  allProject:any[] = []
  allModels:any[] = []
  allConfiguration:any
  arrow:boolean = false

  ngOnInit():void {
    this.getAllProjects()
    this.getAllModels()
    this.getAllConfigurations()
  }

  getAllProjects():void{
    this._SumouService.GetAllRealEstateOffers().subscribe({
      next:(res)=>{
        this.allProject = res.data
      }
    })
  }

  getAllModels():void{
    this._SumouService.GetAllModels().subscribe({
      next:(res)=>{
        this.allModels = res.data
        console.log(this.allModels);

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

  swiperConfig: SwiperOptions = {
    slidesPerView: 3,
    spaceBetween: 20,
    centeredSlides: true,
    loop:true,
    autoplay: {
      delay: 1000,
      disableOnInteraction: false
    },
    breakpoints: {
      1200: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      0: {
        slidesPerView: 1,
        spaceBetween: 20,
      }
    }
  };


}
