import { NgClass } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent{
  toggleIcon:boolean = true

  changeIcon():void{
    this.toggleIcon = !this.toggleIcon;
    console.log(this.toggleIcon);
  }
}
