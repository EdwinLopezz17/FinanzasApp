import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-registrar-cliente',
  templateUrl: './registrar-cliente.component.html',
  styleUrls: ['./registrar-cliente.component.css']
})
export class RegistrarClienteComponent implements OnInit {


  form:FormGroup;
  constructor(private _formB:FormBuilder,
              public _router:Router,) {

    this.form = this._formB.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      dni: ['', Validators.required],
    });
  }
  ngOnInit(): void {
  }

  sendClient(){
    if(this.form.valid){
      alert("valid")
    }else{
      alert("Invalid")
    }
  }


}
