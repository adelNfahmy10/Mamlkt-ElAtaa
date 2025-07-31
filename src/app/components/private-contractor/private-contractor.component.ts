import { Component, inject } from '@angular/core';
import { SumouService } from '../../core/servcies/sumou/sumou.service';

@Component({
  selector: 'app-private-contractor',
  standalone: true,
  imports: [],
  templateUrl: './private-contractor.component.html',
  styleUrl: './private-contractor.component.scss'
})
export class PrivateContractorComponent {
 private readonly _SumouService = inject(SumouService)

  allContracting:any[] = []
  allContacts:any

  ngOnInit():void {
    this.getAllContracting()
    this.getAllContacts()
  }

  getAllContracting():void{
    this._SumouService.GetAllContracting().subscribe({
      next:(res)=>{
        this.allContracting = res.data.filter((con:any) => con.typeId == 2)
      }
    })
  }

  getAllContacts():void{
    this._SumouService.GetAllContacts().subscribe({
      next:(res)=>{
        this.allContacts = res.data[0]
        console.log(this.allContacts);

      }
    })
  }
}
