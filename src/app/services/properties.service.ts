import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserService} from "./user.service";
import {Observable} from "rxjs";
import {IProperty} from "../models/IProperty";

@Injectable({
  providedIn: 'root'
})
export class PropertiesService {

  baseUrl: string="https://monoline.azurewebsites.net/api/property"
  //baseUrl: string="https://localhost:44303/api/property"

  constructor(private _http:HttpClient,
              ) {

  }

  getAllPosts():Observable<IProperty>{
    return this._http.get<IProperty>(this.baseUrl);
  }

  getById(id:number):Observable<IProperty>{
    const url = `${this.baseUrl}/${id}`;

    return this._http.get<IProperty>(url);
  }

}
