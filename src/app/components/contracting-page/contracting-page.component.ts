import { Component, inject } from '@angular/core';
import { SumouService } from '../../core/servcies/sumou/sumou.service';
import { OldProjectPageComponent } from "../old-project-page/old-project-page.component";
import { ContractingComponent } from "../contracting/contracting.component";
import { PrivateContractorComponent } from "../private-contractor/private-contractor.component";

@Component({
  selector: 'app-contracting-page',
  standalone: true,
  imports: [ContractingComponent, PrivateContractorComponent],
  templateUrl: './contracting-page.component.html',
  styleUrl: './contracting-page.component.scss'
})
export class ContractingPageComponent {
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
