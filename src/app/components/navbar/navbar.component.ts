import { NgClass } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgClass],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit{
  activeSection: string = 'home';
  toggleIcon:boolean = true
  sections = ['home', 'project', 'project-offer', 'contracting', 'whoWeAre'];

  ngOnInit(): void {
    this.onScroll();
  }

  @HostListener('window:scroll', []) onScroll(): void {
    for (const sectionId of this.sections) {
      const section = document.getElementById(sectionId);
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          this.activeSection = sectionId;
          break;
        }
      }
    }
  }

  setActive(sectionId: string) {
    this.activeSection = sectionId;
  }

  changeIcon():void{
    this.toggleIcon = !this.toggleIcon;
    console.log(this.toggleIcon);
  }
}
