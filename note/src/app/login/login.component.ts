import { Component, OnInit } from '@angular/core';
import { Signup } from '../signup';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: Signup = new Signup();

  constructor(private router: Router) {
    if (sessionStorage.length > 0 && sessionStorage.getItem("user").length > 0) {
      router.navigate(['/notes']);
    }
  }

  ngOnInit() {

  }

  login(username: string, password: string) {
    sessionStorage.setItem("user", JSON.stringify({ "username": username, "password": password }));
  }
}
