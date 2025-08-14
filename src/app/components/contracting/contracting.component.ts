import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, OnInit } from '@angular/core';
import { SumouService } from '../../core/servcies/sumou/sumou.service';

@Component({
  selector: 'app-contracting',
  standalone: true,
  imports: [],
  templateUrl: './contracting.component.html',
  styleUrl: './contracting.component.scss',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class ContractingComponent implements OnInit{
  private readonly _SumouService = inject(SumouService)

  allContracting:any[] = []
  allContact:any

  ngOnInit():void {
    this.getAllContracting()
    this.getAllContacts()
  }

  getAllContracting():void{
    this._SumouService.GetAllContracting().subscribe({
      next:(res)=>{
        this.allContracting = res.data.filter((con:any) => con.typeId == 1)
      }
    })
  }

  getAllContacts():void{
    this._SumouService.GetAllContacts().subscribe({
      next:(res)=>{
        this.allContact = res.data[0]
      }
    })
  }

}
