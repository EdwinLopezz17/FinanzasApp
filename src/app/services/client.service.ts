import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {IUser} from "../models/IUser";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  baseUrl: string="https://monoline.azurewebsites.net/api/client"
  //baseUrl: string = "https://localhost:44303/api/client"

  constructor(private _http: HttpClient,
              private _router: Router) {
  }

  getAllClients():Observable<IUser>{
    return this._http.get<IUser>(this.baseUrl);
  }

  getClientByDNI(dni: number) {
    const url = `${this.baseUrl}/${dni}`;
    return this._http.get<IUser>(url);
  }

  addClient(data:any){
    return this._http.post(this.baseUrl,data);
  }

}
