import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {


  form:FormGroup;
  constructor(private _formB:FormBuilder,
              public _router:Router,
              private _userServ:UserService) {

    this.form = this._formB.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  addUser(){

    if (this.form.valid) {

        this._userServ.addUser(this.form.value).subscribe({
          next:(val:any)=>{
            alert("Usuario agregado correctamente")

            this._router.navigate(['/login']);
          }
        })

    } else {
      alert('Formulario inválido. Por favor, revisa los campos.');
    }

  }
}
