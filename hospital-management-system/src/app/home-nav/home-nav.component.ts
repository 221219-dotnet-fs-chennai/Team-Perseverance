import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { LoginService } from '../login/login.service';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-home-nav',
  templateUrl: './home-nav.component.html',
  styleUrls: ['./home-nav.component.css'],
})
export class HomeNavComponent implements OnInit {
  constructor(
    private loginService: LoginService,
    private route: Router,
    public auth: AuthService,
    @Inject(DOCUMENT) private doc: Document
  ) {}

  flag = false;
  ngOnInit(): void {
    console.log(this.flag);
    this.auth.isAuthenticated$.subscribe((data) => {
      this.flag = data;
    });
    this.auth.user$.subscribe((profile) => {
      console.log(profile?.email?.split('@')[1]);
      switch (profile?.email?.split('@')[1]) {
        case 'admin.com':
          if (this.loginService.login(profile?.email?.split('@')[1])) {
            this.route.navigate(['/admin']);
          }
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
}
