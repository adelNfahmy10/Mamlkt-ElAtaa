import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'app-parteners',
  standalone: true,
  imports: [],
  templateUrl: './parteners.component.html',
  styleUrl: './parteners.component.scss',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
  export class PartenersComponent {
  swiperConfig: SwiperOptions = {
  slidesPerView: 3,
  spaceBetween: 10,
  loop:true,
  breakpoints: {
      768: { slidesPerView: 2, spaceBetween: 10 },
      1024: { slidesPerView: 3, spaceBetween: 20 }
    }
  };
}
