
export class Flows {
  public id: number;
  public number: number;
  public tep: number;
  public gracePeriod: string;
  public initialBalance: number;
  public interest: number;
  public fee: number;
  public amortization: number;
  public sd: number;
  public str: number;
  public finalBalance: number;
  public flow: number;
  public creditid: number;

  constructor() {
    this.id = 0;
    this.number = 0;
    this.tep = 0;
    this.gracePeriod = "";
    this.initialBalance = 0;
    this.interest = 0;
    this.fee = 0;
    this.amortization = 0;
    this.sd = 0;
    this.str = 0;
    this.finalBalance = 0;
    this.flow = 0;
    this.creditid=0;
  }
}
