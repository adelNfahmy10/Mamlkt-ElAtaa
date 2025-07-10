import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, inject, ViewChild } from '@angular/core';
import { SumouService } from '../../core/servcies/sumou/sumou.service';
import { ActivatedRoute } from '@angular/router';
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.scss',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class ProjectDetailsComponent {
  private readonly _SumouService = inject(SumouService)
  private readonly _ActivatedRoute = inject(ActivatedRoute)

  @ViewChild('mainSwiper') mainSwiper!: ElementRef<HTMLElement>
  projectData:any = {}

  ngAfterViewInit(): void {
    const swiperEl = this.mainSwiper?.nativeElement as any;

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
    this.getProductById()
  }

  getProductById():void{
    this._ActivatedRoute.paramMap.subscribe({
      next:(params)=>{
        let projectId = params.get('id')
        this._SumouService.GetProjectById(projectId).subscribe({
          next:(res)=>{
            this.projectData = res.data
            console.log(this.projectData);

          }
        })
      }
    })
  }
}

