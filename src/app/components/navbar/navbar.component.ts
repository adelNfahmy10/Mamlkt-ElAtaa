import { NgClass } from '@angular/common';
import { Component, HostListener, OnInit, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SumouService } from '../../core/servcies/sumou/sumou.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit{
  private readonly _SumouService = inject(SumouService)
  toggleIcon:boolean = true
  phoneNumber:string = ''

  ngOnInit(): void {
    this.getAllContacts()
  }

  changeIcon():void{
    this.toggleIcon = !this.toggleIcon;
  }

  getAllContacts():void{
    this._SumouService.GetAllContacts().subscribe({
      next:(res)=>{
        this.phoneNumber = res.data[0].phoneNumber

      }
    })
  }
}
