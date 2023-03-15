import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http : HttpClientModule) { }
  isLoggedIn = false
  login(email : string){
    if(email === 'admin.com' || 'doctor.com' || 'nurse.com'){
      this.isLoggedIn = true
      //u can add specific routes here
    }
    return this.isLoggedIn
  }
}
