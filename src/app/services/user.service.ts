import { Injectable } from '@angular/core';
import {IUser} from "../models/IUser";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl: string="https://monoline.azurewebsites.net/api/user"
  //baseUrl: string="https://localhost:44303/api/user"
  users:IUser[]=[];
  user!:IUser;

  constructor(private _http:HttpClient,
              private _router:Router) {

  }
  getAllUsers():Observable<IUser>{
    return this._http.get<IUser>(this.baseUrl);
  }

  getUserById(id: number) {
    const url = `${this.baseUrl}/${id}`;
    return this._http.get<IUser>(url);
  }

  addUser(data:any){
    return this._http.post(this.baseUrl,data);
  }



  loginUser(email: string, pass: string) {

    this.getAllUsers().subscribe((val: any) => {
      this.users = val;
      console.log(this.users)
      this.validarLogin(email, pass);
    });
  }
  validarLogin(email: string, pass: string) {

    const user = this.users.find((u: IUser) => u.email === email && u.password === pass);
    if (user) {
      window.sessionStorage.setItem('userLogedId', user.id.toString());
      alert("Bienvenido")
      this._router.navigate(['/properties'])

    } else {
      alert("Credenciales invalidas");
    }
  }

  isLoged(){
    if(window.sessionStorage.getItem('userLogedId')){
      return true;
    }else{
      return false;
    }
  }
  idUserLoged(){
    return Number(window.sessionStorage.getItem('userLogedId'));
  }
  automaticLoged(id:number){
    window.sessionStorage.setItem('userLogedId', String(id));
  }
  logOut(){
    window.sessionStorage.clear();
  }


}
