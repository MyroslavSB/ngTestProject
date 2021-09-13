import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatListModule} from "@angular/material/list";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";


import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { ChooseHeroComponent } from './pages/choose-hero/choose-hero.component';
import { HeaderBarComponent } from './components/header-bar/header-bar.component';
import { HeroCardComponent } from './components/hero-card/hero-card.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import {AngularFireModule} from "@angular/fire/compat";
import { KeyboardComponent } from './components/keyboard/keyboard.component';

export const firebaseConfig = {
  apiKey: "AIzaSyDqMsD03ZE4yufpE4f38qLgwsa3s6A9thU",
  authDomain: "testproject-3a847.firebaseapp.com",
  databaseURL: "https://testproject-3a847-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "testproject-3a847",
  storageBucket: "testproject-3a847.appspot.com",
  messagingSenderId: "448401440539",
  appId: "1:448401440539:web:c6ddcdfb3c77a27916ddbe",
  measurementId: "G-EQ94MVWXYL"
}
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ChooseHeroComponent,
    HeaderBarComponent,
    HeroCardComponent,
    SignUpComponent,
    KeyboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatCheckboxModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
