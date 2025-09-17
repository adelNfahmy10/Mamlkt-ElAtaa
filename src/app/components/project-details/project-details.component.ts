import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, inject, ViewChild } from '@angular/core';
import { SumouService } from '../../core/servcies/sumou/sumou.service';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [],
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
        let type = params.get('type')
        if(type == 'project'){
          this._SumouService.GetProjectById(projectId).subscribe({
            next:(res)=>{
              this.projectData = res.data
              if(!this.projectData.mainPicture){
                this.projectData.mainPicture = this.projectData.projectDetails[0].picture
              }
            }
          })
        } else if(type == 'model'){
          this._SumouService.GetModelById(projectId).subscribe({
            next:(res)=>{
              this.projectData = res.data
              console.log(this.projectData);
            }
          })
        }

      }
    })
  }
}

