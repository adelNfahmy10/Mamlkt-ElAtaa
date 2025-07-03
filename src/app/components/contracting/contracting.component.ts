import { Component, inject, OnInit } from '@angular/core';
import { SumouService } from '../../core/servcies/sumou/sumou.service';

@Component({
  selector: 'app-contracting',
  standalone: true,
  imports: [],
  templateUrl: './contracting.component.html',
  styleUrl: './contracting.component.scss'
})
export class ContractingComponent implements OnInit{
  private readonly _SumouService = inject(SumouService)

  allContracting:any[] = []
  allConfiguration:any

  ngOnInit():void {
    this.getAllContracting()
    this.getAllConfigurations()
  }

  getAllContracting():void{
    this._SumouService.GetAllContracting().subscribe({
      next:(res)=>{
        this.allContracting = res.data
      }
    })
  }

  getAllConfigurations():void{
    this._SumouService.GetAllConfigurations().subscribe({
      next:(res)=>{
        this.allConfiguration = res.data[0]
      }
    })
  }

}
