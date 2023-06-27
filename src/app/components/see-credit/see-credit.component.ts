import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Flows} from "../../models/Flows";
import {CreditService} from "../../services/credit.service";
import {ClientService} from "../../services/client.service";
import {Client} from "../../models/Client";

@Component({
  selector: 'app-see-credit',
  templateUrl: './see-credit.component.html',
  styleUrls: ['./see-credit.component.css']
})
export class SeeCreditComponent implements OnInit{


  listFlows:Flows[]=[]
  client !:Client;

  constructor(private _route:ActivatedRoute,
              private _creditServ:CreditService,
              private _clientServ:ClientService) {

  }

  ngOnInit(): void {

    this._route.paramMap.subscribe(params => {
      const creditId = Number(params.get('id'));

        this._creditServ.getCreditById(creditId).subscribe({
          next:(val:any)=>{
            this._clientServ.getClientByDNI(val.client_dni).subscribe({
              next:(val:any)=>{
                this.client = val;
              }
            })
          }
        })

        this._creditServ.getFlowsByCreditId(creditId).subscribe({
          next:(val:any)=>{
            this.listFlows=val;

          }
        })
      });
  }
}
