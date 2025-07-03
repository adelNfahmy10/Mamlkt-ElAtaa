import { Component, inject, OnInit } from '@angular/core';
import { SumouService } from '../../core/servcies/sumou/sumou.service';

@Component({
  selector: 'app-who-we-are',
  standalone: true,
  imports: [],
  templateUrl: './who-we-are.component.html',
  styleUrl: './who-we-are.component.scss'
})
export class WhoWeAreComponent implements OnInit{
  private readonly _SumouService = inject(SumouService)

  allContacts:any
  allAboutUs:any[] = []

  ngOnInit(): void {
    this.getAllContacts()
    this.getAllAboutUs()
  }

  getAllContacts():void{
    this._SumouService.GetAllContacts().subscribe({
      next:(res)=>{
        this.allContacts = res.data[0]
        console.log(this.allContacts);
      }
    })
  }

  getAllAboutUs():void{
    this._SumouService.getAllAboutUs().subscribe({
      next:(res)=>{
        this.allAboutUs = res.data
        console.log(this.allAboutUs);
      }
    })
  }
}
