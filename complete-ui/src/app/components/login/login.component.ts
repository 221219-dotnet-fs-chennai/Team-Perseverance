import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { LoginService } from '../login.service';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  service: any;
  constructor(private router : Router, private fb:FormBuilder, public auth : AuthService,
    private loginService : LoginService, private route : Router, @Inject(DOCUMENT) private doc: Document){}
  loginForm !: FormGroup
  flag = false
  ngOnInit(){
    this.loginForm = this.fb.group({
      email : ['', [Validators.required, Validators.email]],
      password:['',[Validators.required,Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).{8,}$")]]
    })
    this.auth.user$.subscribe((profile) => {
      console.log(profile?.email?.split('@')[1]);
      switch (profile?.email?.split('@')[1]) {
        case 'admin.com':
          console.log("jkhjk");
          
          this.route.navigate(['/register']);
          // if(this.loginService.login(profile?.email?.split('@')[1])){
          //   this.route.navigate(['/register']);
          // }
          break;
        case 'doctor.com':
          this.route.navigate(['/doctor']);
          break;
        case 'nurse.com':
          this.route.navigate(['/nurse']);
          break;
        default:
          this.route.navigate(['/notfound']);
          break;
      }
    });
  }
  login(){
    console.log(this.loginForm.getRawValue())
    this.service.login(this.loginForm.getRawValue()).subscribe((data: any)=>{
      console.log(data)
    })
  }

    
  
  
  loginWithRedirect() {
    this.auth.loginWithRedirect();
  }

  logout() {
    this.auth.logout({
      logoutParams: {
        returnTo: this.doc.location.origin,
      },
    });
  }
  NavigateToSignUp(){
    this.router.navigate(['/register'])
  }
  NavigateToMain(){
    this.router.navigate([''])
  }
  patientLogin(){
    this.router.navigate(['/patient-dashboard'])
  }
}
