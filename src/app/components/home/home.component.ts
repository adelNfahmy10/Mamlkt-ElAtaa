import { AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, inject, OnInit, Renderer2, ViewChild } from '@angular/core';
import { SumouService } from '../../core/servcies/sumou/sumou.service';
import { SwiperOptions } from 'swiper/types';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeComponent implements AfterViewInit, OnInit{
  private readonly _SumouService = inject(SumouService)

  @ViewChild('mainSwiper') mainSwiper!: ElementRef<HTMLElement>
  allHeadersImage:any[] = []

  ngAfterViewInit(): void {
    const swiperEl = this.mainSwiper.nativeElement as any;

    if (swiperEl && swiperEl.swiper) {
      swiperEl.addEventListener('mouseenter', () => {
        swiperEl.swiper.autoplay.stop();
      });

      swiperEl.addEventListener('mouseleave', () => {
        swiperEl.swiper.autoplay.start();
      });
    }
  }

  ngOnInit():void {
    this.getAllHeaders()
  }

  getAllHeaders():void{
    this._SumouService.GetAllHeaders().subscribe({
      next:(res)=>{
        this.allHeadersImage = res.data
      }
    })
  }

  swiperConfig: SwiperOptions = {
    breakpoints: {
      1200: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      0: {
        slidesPerView: 3,
        spaceBetween: 20,
      }
    }
  };
}
