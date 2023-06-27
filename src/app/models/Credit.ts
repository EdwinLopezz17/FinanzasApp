
export class Credit {
  public id: number;
  public client_dni: number;
  public money: string;
  public idProperty: number;
  public initialFee: number;
  public isSustainable: boolean;
  public goodPayerBonus: boolean;
  public interestRate: number;
  public partialGracePeriod: number;
  public fullGracePeriod: number;
  public numberOfYears: number;
  public paymentFrequency: number;

  constructor() {
    this.id = 0;
    this.client_dni = 0;
    this.money = "";
    this.idProperty = 0;
    this.initialFee = 0;
    this.isSustainable = false;
    this.goodPayerBonus = false;
    this.interestRate = 0;
    this.partialGracePeriod = 0;
    this.fullGracePeriod = 0;
    this.numberOfYears = 0;
    this.paymentFrequency = 0;
  }
}
