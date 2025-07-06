import { Component, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import { SumouService } from '../../core/servcies/sumou/sumou.service';
import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'app-projectoffer',
  standalone: true,
  imports: [],
  templateUrl: './projectoffer.component.html',
  styleUrl: './projectoffer.component.scss',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class ProjectofferComponent {
 private readonly _SumouService = inject(SumouService)

  allProject:any[] = []
  allConfiguration:any

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
        console.log(this.allConfiguration);

      }
    })
  }

  swiperConfig: SwiperOptions = {
    slidesPerView: 3,
    spaceBetween: 20,
    loop:true,
    breakpoints: {
      768: { slidesPerView: 2, spaceBetween: 10 },
      1024: { slidesPerView: 3, spaceBetween: 20 }
    }
  };
}
