import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { NovitaComponent } from './novita/novita.component';
import { UomoComponent } from './uomo/uomo.component';
import { DonnaComponent } from './donna/donna.component';
import { KidsComponent } from './kids/kids.component';
import { OutletComponent } from './outlet/outlet.component';
import { DetailComponent } from './detail/detail.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CarelloComponent } from './carello/carello.component';
import { CheckoutComponent } from './checkout/checkout.component';

import { FormsModule } from '@angular/forms';
import { Header1Component } from './header1/header1.component';
import { GraziepaginaComponent } from './graziepagina/graziepagina.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    NovitaComponent,
    UomoComponent,
    DonnaComponent,
    KidsComponent,
    OutletComponent,
    DetailComponent,
    SidebarComponent,
    CarelloComponent,
    CheckoutComponent,
    Header1Component,
    GraziepaginaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
