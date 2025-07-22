import { AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, inject, OnInit, Renderer2, ViewChild } from '@angular/core';
import { SumouService } from '../../core/servcies/sumou/sumou.service';
import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeComponent implements AfterViewInit, OnInit{
  private readonly _SumouService = inject(SumouService)
  private readonly _Renderer2 = inject(Renderer2)

  @ViewChild('mainSwiper') mainSwiper!: ElementRef<HTMLElement>
  @ViewChild('heading') headingRef!: ElementRef;

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

    const heading = this.headingRef.nativeElement;
    // Listen for animation end
    heading.addEventListener('animationend', () => {
      setTimeout(() => {
        // Remove the initial animation classes
        this._Renderer2.removeClass(heading, 'animate__backInDown');
        this._Renderer2.removeClass(heading, 'animate__delay-1s');

        // Add the exit animation class
        this._Renderer2.addClass(heading, 'animate__backOutLeft');
      }, 4000);
    });
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
