import { Component, OnInit } from '@angular/core';
import { Signup } from '../signup';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: Signup = new Signup();

  constructor() { }

  ngOnInit() {
  }

  login(){

  }
}
