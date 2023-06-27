import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {WelcomeComponent} from "./components/welcome/welcome.component";
import {RegisterComponent} from "./components/register/register.component";
import {LoginComponent} from "./components/login/login.component";
import {PropiedadesComponent} from "./components/propiedades/propiedades.component";
import {CollectData} from "./components/collect-data/collect-data";
import {
  ListarPropiedadesComponent
} from "./components/listar-propiedades/listar-propiedades.component";
import {SeeCreditsComponent} from "./components/see-credits/see-credits.component";
import {SeeCreditComponent} from "./components/see-credit/see-credit.component";
import {ListCreditsComponent} from "./components/list-credits/list-credits.component";


const routes: Routes = [
  {path: '', component:WelcomeComponent},
  {path: 'register',component:RegisterComponent},
  {path: 'login',component:LoginComponent},
  {path: 'properties', component:PropiedadesComponent,
    children:[
      {path:'', component:ListarPropiedadesComponent},
      {path: ':id', component:CollectData},
    ]},
  {path: 'seecredits', component:SeeCreditsComponent,
    children:[
      {path:'', component:ListCreditsComponent},
      {path: ':id', component:SeeCreditComponent},
    ]},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
