import {Component, OnInit} from '@angular/core';
import {Credit} from "../../models/Credit";
import {CreditService} from "../../services/credit.service";
import {ClientService} from "../../services/client.service";
import {PropertiesService} from "../../services/properties.service";

@Component({
  selector: 'app-list-credits',
  templateUrl: './list-credits.component.html',
  styleUrls: ['./list-credits.component.css']
})
export class ListCreditsComponent implements OnInit {
  credits: Credit[] = [];
  clientNames: { [dni: number]: string } = {};
  propertyPrices: { [id: number]: number } = {}; // Nueva propiedad para almacenar los precios de las propiedades

  constructor(
    private _creditServ: CreditService,
    private _clientServ: ClientService,
    private _propertyServ: PropertiesService
  ) {
  }


  ngOnInit(): void {
    this._creditServ.getAllCredits().subscribe({
      next: (val: any) => {
        this.credits = val;

        // Obtener los nombres de los clientes correspondientes y los precios de las propiedades
        this.credits.forEach((credit: Credit) => {
          this._clientServ.getClientByDNI(credit.client_dni).subscribe({
            next: (val: any) => {
              this.clientNames[credit.client_dni] = val?.name;
            },
          });

          this._propertyServ.getById(credit.idProperty).subscribe({
            next: (val: any) => {
              this.propertyPrices[credit.idProperty] = val.price;
            },
          });
        });
        //this._propertyServ.getById(credit.idProperty).subscribe({
      },
    });
  }
}
