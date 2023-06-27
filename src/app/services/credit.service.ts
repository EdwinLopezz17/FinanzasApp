import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {IUser} from "../models/IUser";

@Injectable({
  providedIn: 'root'
})
export class CreditService {

  baseUrl: string="https://monoline.azurewebsites.net/api/credit"
  //baseUrl: string="https://localhost:44303/api/credit"

  constructor(private _http:HttpClient,
              private _router:Router) { }


  getAllCredits():Observable<IUser>{
    return this._http.get<IUser>(this.baseUrl);
  }

  getCreditById(id: number) {
    const url = `${this.baseUrl}/${id}`;
    return this._http.get<IUser>(url);
  }

  addCredit(data:any){
    return this._http.post(this.baseUrl,data);
  }

  getFlowsByCreditId(id: number){
    const url = `${this.baseUrl}/${id}/futureflow`;
    return this._http.get(url);
  }

}
