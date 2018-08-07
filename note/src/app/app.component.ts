import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'note';

  constructor(private router: Router) {
    if (sessionStorage.length == 0 && sessionStorage.getItem("user").length > 0) {
      router.navigate(['/login']);
    } else {
      router.navigate(['/notes']);
    }
  }
}
