import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeNavComponent } from './home-nav/home-nav.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AuthHttpInterceptor, AuthModule } from '@auth0/auth0-angular';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { HttpClientModule } from '@angular/common/http';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip'; 
import {MatButtonModule} from '@angular/material/button'; 
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatInputModule} from '@angular/material/input';
import { RegisterComponent } from './register/register.component';
import { NewloginComponent } from './newlogin/newlogin.component'; 

@NgModule({
  declarations: [AppComponent, HomeNavComponent, LoginComponent, RegisterComponent, NewloginComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AuthModule.forRoot({
      domain: 'dev-hsr0056cw3v05nmk.us.auth0.com',
      clientId: 'wov5rSwD3cVkOAfuSPAc9T1lD8LS88zM',
      authorizationParams: {
        redirect_uri: window.location.origin,
      },
    }),
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,MatIconModule,MatTooltipModule,MatButtonModule,MatCardModule,MatFormFieldModule,MatInputModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthHttpInterceptor,
      multi: true,
    },
    {
      provide: Window,
      useValue: window,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
