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
  showLogin = true
  showAdminNav = false
  showRegister = false
  constructor (private router : Router){
    router.events.subscribe((val) => {
      if(val instanceof NavigationEnd){
        if(val.url === '/admin'){
          this.showNav = false
          this.showAdminNav = true
          this.showRegister = false
          this.showLogin = false
        }else if(val.url === '/register'){
          this.showRegister = true
          this.showNav = false
          this.showAdminNav = false
          this.showLogin = false
        }
      }
    })
  }
}
