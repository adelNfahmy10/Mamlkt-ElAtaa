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
  slidesPerView: 4,
  spaceBetween: 10,
  loop:true,
  breakpoints: {
      350: { slidesPerView: 2, spaceBetween: 10 },
      576: { slidesPerView: 2, spaceBetween: 10 },
      768: { slidesPerView: 3, spaceBetween: 10 },
      1024: { slidesPerView: 4, spaceBetween: 20 }
    }
  };

  doctors = [
    { name: 'د/ اسامة ابو المجد', specialty: 'أستاذ المخ والأعصاب والطب النفسى وعلاج الإدمان_استشارى أمراض النوم', image: '../../../assets/image/home/home-silder-2.jpg', alt:'osama aboelmagd' },
    { name: 'د/ خالد البسومي', specialty: 'أخصائى التغذيه العلاجيه والسمنه والنحافه', image: 'assets/images/doctors/doctor2.png', alt:'khaled elbasomi' },
    { name: 'د/ احمد مصطفى', specialty: 'أستاذ أمراض النسا والتوليد وعلاج العقم_كلية الطب_جامعة الاسكندريه_زميل الكليه الملكيه_انجلترا', image: 'assets/images/doctors/doctor3.png', alt:'ahmed mostafa' },
    { name: 'د/ أحمد فوزي', specialty: 'أخصائى امراض النسا والتوليد والحقن المجهرى', image: 'assets/images/doctors/doctor4.png', alt:'ahmed fawzi' },
    { name: 'د/ نيللي شمس', specialty: 'استشاري التغذية العلاجية والصحة العامة', image: 'assets/images/doctors/doctor5.png', alt:'nelly shams' }
  ];
}
