import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hospital-management-system';
  showNav = true
  showAdminNav = false
  constructor (private router : Router){
    router.events.subscribe((val) => {
      if(val instanceof NavigationEnd){
        if(val.url === '/admin'){
          this.showNav = false
          this.showAdminNav = true
        }
      }
    })
  }
}
