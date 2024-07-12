import { Component } from '@angular/core';
import { NikeService } from '../services/nike.service';
import { INike } from '../models/INike';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent {
  scarpe: any; // Variabile per memorizzare i dati delle scarpe
  nikee = {
    taglie_disponibili: [36, 37, 38, 39, 40, 41, 42, 43]
  };
  Nonvedere1:boolean=true
  Nonvedere2:boolean=false
  Nonvedere3:boolean=false
  Nonvedere4:boolean=false
  tagliaa: string ="";
  carello:boolean=false
 


  // Inietta il servizio NikeService e ActivatedRoute nel costruttore
  constructor(private nikeService: NikeService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Ascolta i cambiamenti nei parametri della URL
    this.route.params.subscribe((params) => {
      console.log(params); // Stampa i parametri della URL nella console
      if (params['id'] == undefined) {
        // Se 'id' non è definito, ottieni tutte le scarpe
        this.nikeService.getNike().subscribe((data) => {
          this.scarpe = data; // Memorizza i dati delle scarpe nella variabile 'scarpe'
        });
      } else {
        console.log(params['id']); // Stampa l'id della scarpa nella console
        // Se 'id' è definito, ottieni i dettagli della scarpa specificata
        this.nikeService.getNikeById(params['id']).subscribe((data) => {
          console.log(data); // Stampa i dettagli della scarpa nella console
          this.scarpe = data; // Memorizza i dettagli della scarpa nella variabile 'scarpe'
          console.log(this.scarpe); // Stampa i dettagli della scarpa memorizzati nella variabile 'scarpe'
        });
      }

    });
    
  }
  mostra1(){
    this.Nonvedere1=true
    this.Nonvedere2=false
    this.Nonvedere3=false
    this.Nonvedere4=false
  
   
   
   
  }
  mostra2(){
    this.Nonvedere2=true
    this.Nonvedere3=false
    this.Nonvedere4=false
    this.Nonvedere1=false
  
  
  
  }
  mostra3(){
    this.Nonvedere3=true
    this.Nonvedere2=false
    this.Nonvedere1=false
    this.Nonvedere4=false
 
 
 
  }
  mostra4(){
    this.Nonvedere4=true
    this.Nonvedere3=false
    this.Nonvedere2=false
    this.Nonvedere1=false
    
    
    
   
  }
  selezionaTaglia(taglia: string) {
    this.tagliaa = taglia;
    console.log('Taglia selezionata ' + taglia);
  }

  mostracarello(){
    if(!this.tagliaa){
      console.error('Seleziona la misura');
      alert('Seleziona la misura');
      return;
    }else{
      this.carello=true
      this.nikeService.addToCart(this.scarpe[0], this.tagliaa);
      console.log("Scarpa:",this.scarpe[0], this.tagliaa)
      console.log('Prodotto aggiunto al carrello');
      setTimeout(() => {
        this.carello = false;
      },4000);
    }

  }
  chiusoo(){
    this.carello=false
  }


  
 

}
