import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooldalComponent } from './fooldal/fooldal.component';
import { RolunkComponent } from './rolunk/rolunk.component';
import { ErrorComponent } from './error/error.component';
import { TermekekComponent } from './termekek/termekek.component';
import { FormsModule } from '@angular/forms';
import { AutokComponent } from './autok/autok.component';
import { KapcsolatComponent } from './kapcsolat/kapcsolat.component';
import { BMIComponent } from './bmi/bmi.component';

@NgModule({
  declarations: [
    AppComponent,
    FooldalComponent,
    RolunkComponent,
    ErrorComponent,
    TermekekComponent,
    AutokComponent,
    KapcsolatComponent,
    BMIComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
