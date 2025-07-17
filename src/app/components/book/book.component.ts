import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, inject, ViewChild } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from '../footer/footer.component';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { SumouService } from '../../core/servcies/sumou/sumou.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, ReactiveFormsModule, NgClass],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class BookComponent {
  private readonly _SumouService = inject(SumouService)
  private readonly _FormBuilder = inject(FormBuilder)
  private readonly _ActivatedRoute = inject(ActivatedRoute)
  private readonly _Router = inject(Router)

  @ViewChild('mainSwiper') mainSwiper!: ElementRef<HTMLElement>
  projectData:any
  projectId:string | null = null

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
        this.projectId = params.get('id')
        this._SumouService.GetProjectById(this.projectId).subscribe({
          next:(res)=>{
            this.projectData = res.data
          }
        })
      }
    })
  }

  contactForm:FormGroup = this._FormBuilder.group({
    projectId: ['', Validators.required],
    fullName: ['', Validators.required],
    phoneNumber: ['', Validators.required],
    location: ['', Validators.required],
    message: ['', Validators.required]
  })

  submitContactForm():void{
    let data = this.contactForm.value
    data.projectId = this.projectId

    this._SumouService.createContactUs(data).subscribe({
      next:(res)=>{
        this.contactForm.reset()
        Swal.fire({
          title: "تم إرسال البيانات.",
          icon: "success",
          draggable: true
        }).then((result) => {
          if (result.isConfirmed) {
            this._Router.navigate(['/project-details/' + this.projectId])
          }
        });
      }
    })
  }
}
