import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {WelcomeComponent} from "./components/welcome/welcome.component";
import {RegisterComponent} from "./components/register/register.component";
import {LoginComponent} from "./components/login/login.component";
import {PropiedadesComponent} from "./components/propiedades/propiedades.component";
import {CalculationComponent} from "./components/calculation/calculation.component";
import {
  ListarPropiedadesComponent
} from "./components/listar-propiedades/listar-propiedades.component";


const routes: Routes = [
  {path: '', component:WelcomeComponent},
  {path: 'register',component:RegisterComponent},
  {path: 'login',component:LoginComponent},
  {path: 'properties', component:PropiedadesComponent,
    children:[
      {path:'', component:ListarPropiedadesComponent},
      {path: ':id', component:CalculationComponent},
    ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
