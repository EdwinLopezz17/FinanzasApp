import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {

  constructor(private _router:Router,) {
  }


  register(){
    this._router.navigate(['/register']);
  }
  login(){
    this._router.navigate(['/login']);
  }
}
