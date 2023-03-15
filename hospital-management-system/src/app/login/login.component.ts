import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router :Router){
    router.events.subscribe((val) => {
      if(val instanceof NavigationEnd){
        if(val.url === '/register'){
          this.show = false
        }
      }
    })
  }
  show = true;
  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
}
