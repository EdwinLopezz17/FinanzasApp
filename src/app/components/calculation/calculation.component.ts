import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {PropiedadesService} from "../../services/propiedades.service";
import {IPropiedades} from "../../models/IPropiedades";

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

  id:number=0;
  propiedad: IPropiedades | undefined;

  form:FormGroup;
  constructor(private _formB:FormBuilder,
              private _route:ActivatedRoute,
              private _servProp:PropiedadesService,) {

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

    this.form.get('inicial')?.valueChanges.subscribe(inicial => {
      const price = this.propiedad?.price || 0;
      this.montoFinanciar = price - (inicial || 0);
    });

  }


  ngOnInit(): void {
    this._route.params.subscribe(params=>{
      this.id = params['id'];
      this.propiedad = this._servProp.getById(this.id) || undefined;
      this.montoFinanciar = this.propiedad?.price || 0;
    });


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
