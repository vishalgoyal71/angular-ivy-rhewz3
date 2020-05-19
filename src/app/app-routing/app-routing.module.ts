import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import{Routes,RouterModule} from '@angular/router';
import { HomeComponent } from './home.component';
import { AboutusComponent } from './aboutus.component';
const routes:Routes=[{
  path:'home',component:HomeComponent
},
{path:'aboutus',Component:AboutusComponent
}];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class AppRoutingModule { }