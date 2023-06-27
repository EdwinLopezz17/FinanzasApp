import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {IProperty} from "../../models/IProperty";
import {ConvertorService} from "../../services/convertor.service";
import {PropertiesService} from "../../services/properties.service";
import {ClientService} from "../../services/client.service";
import {FinanceDatas} from "../../models/FinanceDatas";
import {Client} from "../../models/Client";
import {CreditService} from "../../services/credit.service";

@Component({
  selector: 'app-collect-data',
  templateUrl: './collect-data.html',
  styleUrls: ['./collect-data.css']
})
export class CollectData implements OnInit{

  datasClient:boolean=false;

  tasa:string[]=[
    'TE', 'TN',
  ];
  plaso:string[]=[
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

  cambio:number=1;
  montoFinanciar = 0;
  dollar:boolean=false;
  pen:boolean=true;

  id:number=0;
  financeDatas: FinanceDatas = new FinanceDatas();
  newClient: Client = new Client()

  property !:IProperty;



  form:FormGroup;
  formClient:FormGroup;
  constructor(private _formB:FormBuilder,
              private _route:ActivatedRoute,
              private router:Router,
              private _servProp:PropertiesService,
              private _covert:ConvertorService,
              private _clientServ:ClientService,
              private _creditSer:CreditService) {

    this.form = this._formB.group({
      tasaType:['', [Validators.required]],
      tasaPlaso:['', [Validators.required]],
      capitalizacionSelec:'',
      tasaValue:['', [Validators.required]],
      tiempoGT:['', [Validators.required]],
      tiempoGP:['', [Validators.required]],
      cok:['', [Validators.required]],
      inicial:['', [Validators.required]],
      plasoAnio:['', [Validators.required]],
      frecPago:['', [Validators.required]]
    });

    this.formClient=this._formB.group({
      name:['',[Validators.required]],
      lastName:['',[Validators.required]],
      dni:['',[Validators.required]]
    })
  }

  ngOnInit(): void {
    this.obtenerProperty();


  }

  obtenerProperty(){
    this._route.paramMap.subscribe(params => {
      const propId = Number(params.get('id'));
      this.financeDatas.idProperty=propId;
      this._servProp.getById(propId).subscribe({
        next: (val: any) => {
          this.property = val;
          this.montoFinanciar = val.price;
        }
      });
    });
  }

  calcular(){
    if(this.form.valid){

      alert("valid");

      this.datasClient=true;


    }else{
      alert("invalid");
    }
  }

  addClient(){
    if(this.formClient.valid){
      alert("Valid")

      this.newClient.dni = this.formClient.get("dni")?.value;
      this.newClient.name = this.formClient.get("name")?.value;
      this.newClient.lastname = this.formClient.get("lastName")?.value;

      this._clientServ.addClient(this.newClient).subscribe({
        next: (val: any) => {
          alert("Client agregado");

          this.datasClient = false;

          this.convertFormToFinanceData();

          this._creditSer.addCredit(this.financeDatas).subscribe({
            next:(val:any)=>{
              alert("Credito concretado");
              this.router.navigate(['/seecredits'])
            }
          })

        }
      });





    }else {
      alert("Invalid")
    }
  }

  selectDollar() {
    if(!this.dollar) {
      this.dollar = true;
      this.pen = false;
      this.cambio = 1 / (3.78);
      this.cambios();
    }
  }

  selectPen() {
    if(!this.pen) {
      this.dollar = false;
      this.pen = true;
      this.cambio = 3.78;
      this.cambios();
    }
  }

  cambios() {
      this.montoFinanciar = Number((this.montoFinanciar * this.cambio).toFixed(2));
  }
  datasClientTofalse(){
    this.datasClient=false;
  }

  convertFormToFinanceData(){

    this.financeDatas.client_dni = this.formClient.get('dni')?.value||'';
    this.financeDatas.money = "USD";
    this.financeDatas.initialFee = this.montoFinanciar*(this.form.get('inicial')?.value/100.00);
    this.financeDatas.partialGracePeriod = this.form.get('tiempoGP')?.value||'';
    this.financeDatas.fullGracePeriod =   this.form.get('tiempoGT')?.value||'';
    this.financeDatas.numberOfYears = this.form.get('plasoAnio')?.value||'';
    this.financeDatas.paymentFrequency = this.form.get('frecPago')?.value||'';
    this.financeDatas.cok = this.form.get('cok')?.value||'';

    //OBTENER TASA EFECTIVA ANUEVAL TEA
    this.financeDatas.tasaType = this.form.get("tasaType")?.value;
    this.financeDatas.tasaPlaso = this.form.get("tasaPlaso")?.value;
    this.financeDatas.tasaCapitali = this.form.get('capitalizacionSelec')?.value;
    this.financeDatas.tasaValue = this.form.get('tasaValue')?.value;


    this.financeDatas.interestRate = this.obtenerTEA()/100.00;
    console.log("TEA"+ this.financeDatas.interestRate);
    console.log(this.financeDatas);

  }


  obtenerTEA(){
     if(this.financeDatas?.tasaType == "TN"){
       if(this.financeDatas.tasaPlaso == "Diaria"){
         if(this.financeDatas.tasaCapitali =="Diaria"){
            return this._covert.TNtoTEA(this.financeDatas.tasaValue,1,360);
         }
         if(this.financeDatas.tasaCapitali == "Mensual"){
           return this._covert.TNtoTEA(this.financeDatas.tasaValue,(1/30),12);
         }
         if(this.financeDatas.tasaCapitali == "Anual"){
           return this._covert.TNtoTEA(this.financeDatas.tasaValue,(1/360),1);
         }
       }

       if(this.financeDatas.tasaPlaso == "Mensual"){
         if(this.financeDatas.tasaCapitali =="Diaria"){
           return this._covert.TNtoTEA(this.financeDatas.tasaValue,30,360);
         }
         if(this.financeDatas.tasaCapitali == "Mensual"){
           return this._covert.TNtoTEA(this.financeDatas.tasaValue,1,12);
         }
         if(this.financeDatas.tasaCapitali == "Anual"){
           return this._covert.TNtoTEA(this.financeDatas.tasaValue,(30/360),1);
         }
       }

       if(this.financeDatas.tasaPlaso == "Anual"){
         if(this.financeDatas.tasaCapitali =="Diaria"){
           return this._covert.TNtoTEA(this.financeDatas.tasaValue,360,360);
         }
         if(this.financeDatas.tasaCapitali == "Mensual"){
           return this._covert.TNtoTEA(this.financeDatas.tasaValue,12,12);
         }
         if(this.financeDatas.tasaCapitali == "Anual"){
           return this._covert.TNtoTEA(this.financeDatas.tasaValue,1,1);
         }
       }
     }

     if(this.financeDatas?.tasaType == "TE"){
       if(this.financeDatas.tasaPlaso == "Diaria"){
          return this._covert.TEtoTEA(this.financeDatas.tasaValue,360);
       }

       if(this.financeDatas.tasaPlaso == "Mensual"){
         return this._covert.TEtoTEA(this.financeDatas.tasaValue,12);
       }
       if(this.financeDatas.tasaPlaso == "Anual"){
         return this.financeDatas.tasaValue
       }
     }

     return 0;
  }

}
