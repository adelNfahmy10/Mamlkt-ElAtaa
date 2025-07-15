import { Component, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import { SwiperOptions } from 'swiper/types';
import { SumouService } from '../../core/servcies/sumou/sumou.service';

@Component({
  selector: 'app-old-project',
  standalone: true,
  imports: [],
  templateUrl: './old-project.component.html',
  styleUrl: './old-project.component.scss',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class OldProjectComponent {
   private readonly _SumouService = inject(SumouService)

    allProject:any[] = []
    oldProjectImages:string[] = [
      'assets/image/old-project/WhatsApp Image 2025-06-29 at 13.38.26_a18474ff.jpg',
      'assets/image/old-project/WhatsApp Image 2025-06-29 at 13.38.29_b2339cbd.jpg',
      'assets/image/old-project/WhatsApp Image 2025-06-29 at 13.38.29_f44b7080.jpg',
      'assets/image/old-project/WhatsApp Image 2025-06-29 at 13.38.30_45de2123.jpg',
      'assets/image/old-project/WhatsApp Image 2025-06-29 at 13.38.30_47229c09.jpg',
      'assets/image/old-project/WhatsApp Image 2025-06-29 at 13.38.30_562d1492.jpg',
      'assets/image/old-project/WhatsApp Image 2025-06-29 at 13.38.30_567065d2.jpg',
      'assets/image/old-project/WhatsApp Image 2025-06-29 at 13.38.30_62d2f444.jpg',
      'assets/image/old-project/WhatsApp Image 2025-06-29 at 13.38.30_65d1b275.jpg',
      'assets/image/old-project/WhatsApp Image 2025-06-29 at 13.38.30_8714c520.jpg',
      'assets/image/old-project/WhatsApp Image 2025-06-29 at 13.38.30_9a8fa1bd.jpg',
      'assets/image/old-project/WhatsApp Image 2025-06-29 at 13.38.30_be0f0cf9.jpg',
      'assets/image/old-project/WhatsApp Image 2025-06-29 at 13.38.31_0afb8814.jpg',
      'assets/image/old-project/WhatsApp Image 2025-06-29 at 13.38.31_544ec527.jpg',
      'assets/image/old-project/WhatsApp Image 2025-06-29 at 13.38.31_9ffc94a9.jpg',
      'assets/image/old-project/WhatsApp Image 2025-06-29 at 13.38.31_bbc3b2d5.jpg',
      'assets/image/old-project/WhatsApp Image 2025-06-29 at 13.38.31_ee63768a.jpg',
    ]
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
