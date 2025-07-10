import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgwWowService } from 'ngx-wow';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgClass, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'MAMLKT-ELATAA';
  constructor(private wowService:NgwWowService){
    this.wowService.init()
  }

  showArrow:boolean = false
  @HostListener('window:scroll') onScroll(){
    let scrollPosition = window.scrollY;
    if (scrollPosition > 300) {
      this.showArrow = true
    } else {
      this.showArrow = false
    }
  }
}
