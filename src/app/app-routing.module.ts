import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./pages/login/login.component";
import {ChooseHeroComponent} from "./components/choose-hero/choose-hero.component";
import {SignUpComponent} from "./pages/sign-up/sign-up.component";

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'hero-pick', component: ChooseHeroComponent},
  {path: 'sign-up', component: SignUpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
