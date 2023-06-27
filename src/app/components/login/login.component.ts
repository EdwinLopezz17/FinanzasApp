import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  form:FormGroup;
  constructor(private _formB:FormBuilder,
              public _router:Router,
              private _userServ:UserService) {

    this.form = this._formB.group({
      email:['', [Validators.required, Validators.email]],
      password:['', Validators.required],
    });
  }

  validar(){

      if(this.form.valid){

        console.log(this.form.get('email')?.value)
        console.log(this.form.get('password')?.value)
        this._userServ.loginUser(this.form.get('email')?.value, this.form.get('password')?.value);

      }else{
        alert('Invalid');
      }
  }
}
