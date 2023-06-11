import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  form:FormGroup;
  constructor(private _formB:FormBuilder,
              public _router:Router,) {

    this.form = this._formB.group({
      email:['', [Validators.required, Validators.email]],
      password:['', Validators.required],
    });
  }

  validar(){
    this._router.navigate(['/properties'])
      if(this.form.valid){
        alert('Valido');
      }else{
        alert('Invalid');
      }
  }
}
