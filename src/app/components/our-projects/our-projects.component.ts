import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'app-our-projects',
  standalone: true,
  imports: [],
  templateUrl: './our-projects.component.html',
  styleUrl: './our-projects.component.scss',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class OurProjectsComponent {
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
