
export class FinanceDatas {
  client_dni: number;
  money: string;
  idProperty: number;
  initialFee: number;
  isSustainable: boolean;
  goodPayerBonus: boolean;
  interestRate: number;
  partialGracePeriod: number;
  fullGracePeriod: number;
  numberOfYears: number;
  paymentFrequency: number;
  public cok: number;

  tasaType:string = "";
  tasaPlaso:string = "";
  tasaCapitali:string ="";
  tasaValue:number=0;

  constructor() {
    this.client_dni = 123456789;
    this.money = 'USD';
    this.idProperty = 1;
    this.initialFee = 5000;
    this.isSustainable = true;
    this.goodPayerBonus = true;
    this.interestRate = 5.5;
    this.partialGracePeriod = 3;
    this.fullGracePeriod = 0;
    this.numberOfYears = 10;
    this.paymentFrequency = 12;
    this.cok=0;
  }
}
