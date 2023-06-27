import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConvertorService {

  constructor() { }

  TNtoTEA(j:number, m:number, n:number){
    return ((1+(j/100)/(m))**(n)-1)*100;
  }
  TEtoTEA(Tc:number, cTc:number){
    return (((1+(Tc/100))**cTc)-1)*100;
  }
}
