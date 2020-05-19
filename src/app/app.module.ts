import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import  {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home.component';
import { AboutusComponent } from './aboutus/aboutus.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule,RouterModule ],
  declarations: [ AppComponent, HelloComponent, HomeComponent, AboutusComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
