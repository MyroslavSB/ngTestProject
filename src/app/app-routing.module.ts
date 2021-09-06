import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {ChooseHeroComponent} from "./components/choose-hero/choose-hero.component";

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'hero-pick', component: ChooseHeroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
