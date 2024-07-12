import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NovitaComponent } from './novita/novita.component';
import { UomoComponent } from './uomo/uomo.component';
import { DonnaComponent } from './donna/donna.component';
import { KidsComponent } from './kids/kids.component';
import { OutletComponent } from './outlet/outlet.component';

import { DetailComponent } from './detail/detail.component';
import { CarelloComponent } from './carello/carello.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { GraziepaginaComponent } from './graziepagina/graziepagina.component';


const routes: Routes = [
  {
    path: '',  // Definisce il percorso che si sta guardando
    redirectTo: '/home',  // Specifica dove reindirizzare se il percorso corrisponde
    pathMatch: 'full'  // Specifica come determinare se l'URL corrisponde al percorso specificato
  },
  {path: 'home', component: HomeComponent},
  {path: 'novita',component: NovitaComponent},
  {path: 'uomo',component: UomoComponent},
  {path: 'donna',component: DonnaComponent},
  {path: 'kids',component: KidsComponent},
  {path: 'outlet',component: OutletComponent},
  {path:'detail/:id',component: DetailComponent},
  {path:'novita/:categoria',component: NovitaComponent},
  {path:'novita/:colore',component: NovitaComponent},
  {path:'carello',component: CarelloComponent},
  {path:'checkout',component: CheckoutComponent},
  {path:'graziepagina', component: GraziepaginaComponent},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
