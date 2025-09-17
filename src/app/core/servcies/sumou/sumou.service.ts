import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SumouService {
  private readonly _HttpClient = inject(HttpClient)
  baseUrl:string = 'https://sumou.runasp.net/'

  /* ABOUT US ############################################################# */
  getAllAboutUs():Observable<any>{
    return this._HttpClient.get(`${this.baseUrl}api/AboutUs/GetAllAboutUs`)
  }

  getAboutUsById(id:number):Observable<any>{
    return this._HttpClient.get(`${this.baseUrl}api/AboutUs/GetAboutUsById/${id}`)
  }
  /* Configurations ############################################################# */
  GetAllConfigurations():Observable<any>{
    return this._HttpClient.get(`${this.baseUrl}api/Configuration/GetAllConfigurations`)
  }

  GetConfigurationById(id:number):Observable<any>{
    return this._HttpClient.get(`${this.baseUrl}api/Configuration/GetConfigurationById/${id}`)
  }
  /* Contacts ############################################################# */
  GetAllContacts():Observable<any>{
    return this._HttpClient.get(`${this.baseUrl}api/Contacts/GetAllContacts`)
  }

  GetContactById(id:number):Observable<any>{
    return this._HttpClient.get(`${this.baseUrl}api/Contacts/GetContactById/${id}`)
  }

  createContactUs(data:any):Observable<any>{
    return this._HttpClient.post(`${this.baseUrl}api/ContactUs/CreateContactUs`, data)
  }

  /* Contracting ############################################################# */
  GetAllContracting():Observable<any>{
    return this._HttpClient.get(`${this.baseUrl}api/Contracting/GetAllContracting`)
  }

  GetContractingById(id:number):Observable<any>{
    return this._HttpClient.get(`${this.baseUrl}api/Contracting/GetContractingById/${id}`)
  }

  /* Previous Investments ############################################################# */
  GetAllPreviousInvestments():Observable<any>{
    return this._HttpClient.get(`${this.baseUrl}api/PreviousInvestments/GetAll`)
  }

  GetPreviousInvestmentById(id:number):Observable<any>{
    return this._HttpClient.get(`${this.baseUrl}api/PreviousInvestments/GetById/${id}`)
  }

  /* Projects ############################################################# */
  GetAllProjects():Observable<any>{
    return this._HttpClient.get(`${this.baseUrl}api/Projects/GetAllProjects`)
  }

  GetAllHeaders():Observable<any>{
    return this._HttpClient.get(`${this.baseUrl}api/Projects/GetAllHeaders`)
  }

  GetAllOwnershipProjects():Observable<any>{
    return this._HttpClient.get(`${this.baseUrl}api/Projects/GetAllOwnershipProjects`)
  }

  GetAllRealEstateOffers():Observable<any>{
    return this._HttpClient.get(`${this.baseUrl}api/Projects/GetAllRealEstateOffers`)
  }

  GetProjectById(id:any):Observable<any>{
    return this._HttpClient.get(`${this.baseUrl}api/Projects/GetProjectById/${id}`)
  }

  /* Models ############################################################# */
  GetAllModels():Observable<any>{
    return this._HttpClient.get(`${this.baseUrl}api/Model/GetAllModels`)
  }

  GetModelById(id:any):Observable<any>{
    return this._HttpClient.get(`${this.baseUrl}api/Model/GetModelById/${id}`)
  }


}
