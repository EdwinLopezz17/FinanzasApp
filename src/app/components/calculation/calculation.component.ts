import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-calculation',
  templateUrl: './calculation.component.html',
  styleUrls: ['./calculation.component.css']
})
export class CalculationComponent implements OnInit{

  tasa:string[]=[
    'TE', 'TN',
  ];
  tipo:string[]=[
    'Diaria', 'Mensual','Anual'
  ];
  capitaliza:string[]=[
    'Diaria','Mensual','Anual'
  ];
  tipoGracia:string[]=[
    'Total','Parcial'
  ];
  plasoM:string[]=[
    'Meses','Años'
  ];
  montoFinanciar = 0;

  dollar:boolean=false;
  pen:boolean=true;

  form:FormGroup;
  constructor(private _formB:FormBuilder,) {

    this.form = this._formB.group({
      tasaSelec:'',
      tipoSelec:'',
      capSelec:'',
      tiempoGracia:'',
      tipoGracia:'',
      cok:'',
      inicial:'',
      plasoNum:'',
      plasoTipo:''
    });
  }


  ngOnInit(): void {

  }

  selectDollar() {
    this.dollar = true;
    this.pen = false;
  }

  selectPen() {
    this.dollar = false;
    this.pen = true;
  }

}
