import { Component, inject } from '@angular/core';
import { SumouService } from '../../core/servcies/sumou/sumou.service';
import { OldProjectPageComponent } from "../old-project-page/old-project-page.component";

@Component({
  selector: 'app-contracting-page',
  standalone: true,
  imports: [OldProjectPageComponent],
  templateUrl: './contracting-page.component.html',
  styleUrl: './contracting-page.component.scss'
})
export class ContractingPageComponent {
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
