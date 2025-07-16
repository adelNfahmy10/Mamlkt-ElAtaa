import { Component, inject, OnInit } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { NavbarComponent } from "../navbar/navbar.component";
import { SumouService } from '../../core/servcies/sumou/sumou.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-investment-details',
  standalone: true,
  imports: [FooterComponent, NavbarComponent],
  templateUrl: './investment-details.component.html',
  styleUrl: './investment-details.component.scss'
})
export class InvestmentDetailsComponent implements OnInit{
  private readonly _SumouService = inject(SumouService)
  private readonly _ActivatedRoute = inject(ActivatedRoute)

  investmentId:any = null
  investmentData:any = null

  ngOnInit(): void {
    this.getInvestmentData()
  }


  getInvestmentData():void{
    this._ActivatedRoute.paramMap.subscribe({
      next:(params)=>{
        this.investmentId = params.get('id')
        this._SumouService.GetPreviousInvestmentById(this.investmentId).subscribe({
          next:(res)=>{
            this.investmentData = res.data
            console.log(this.investmentData);
          }
        })
      }
    })
  }


}
