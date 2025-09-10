import { Component, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import { SwiperOptions } from 'swiper/types';
import { SumouService } from '../../core/servcies/sumou/sumou.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-old-project',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './old-project.component.html',
  styleUrl: './old-project.component.scss',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class OldProjectComponent {
  private readonly _SumouService = inject(SumouService)

  allProject:any[] = []
  projectData:any
  oldProjectImages:string[] = [
    './assets/image/old-project/1.jpg',
    './assets/image/old-project/2.jpg',
    './assets/image/old-project/3.jpg',
    './assets/image/old-project/4.jpg',
    './assets/image/old-project/5.jpg',
    './assets/image/old-project/6.jpg',
    './assets/image/old-project/7.jpg',
    './assets/image/old-project/8.jpg',
    './assets/image/old-project/9.jpg',
    './assets/image/old-project/10.jpg',
    './assets/image/old-project/11.jpg',
    './assets/image/old-project/12.jpg',
    './assets/image/old-project/13.jpg',
    './assets/image/old-project/14.jpg',
    './assets/image/old-project/15.jpg',
    './assets/image/old-project/16.jpg',
    './assets/image/old-project/17.jpg',
  ]

  ngOnInit():void {
    this.GetAllPreviousInvestments()
  }

  GetAllPreviousInvestments():void{
    this._SumouService.GetAllPreviousInvestments().subscribe({
      next:(res)=>{
        this.allProject = res.data

      }
    })
  }

  getProjectDataById(id:number):void{
    this._SumouService.GetPreviousInvestmentById(id).subscribe({
      next:(res)=>{
        this.projectData = res.data
      }
    })
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
