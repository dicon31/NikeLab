import { Component } from '@angular/core';
import { INike } from '../models/INike';
import { NikeService } from '../services/nike.service';

@Component({
  selector: 'app-graziepagina',
  templateUrl: './graziepagina.component.html',
  styleUrl: './graziepagina.component.css'
})
export class GraziepaginaComponent {
  prodottiNelcarello: any; // Array che conterrà i prodotti nel carrello
  totale: number = 0; // Variabile che conterrà il totale dei prezzi dei prodotti nel carrello
  
  constructor(private nikeService: NikeService) { }
  
  ngOnInit(): void {
    // All'inizio dell'inizializzazione del componente, ottieni i prodotti nel carrello dal servizio NikeService
    this.prodottiNelcarello = this.nikeService.getProdottiNelCarrello();
    // Calcola il totale dei prezzi dei prodotti nel carrello
    this.calcolaTotale();
    // Stampa i prodotti nel carrello nella console per scopi di debug
    console.log('Prodotti nel carrello:', this.prodottiNelcarello);
  }
  
  calcolaTotale() {
    // Utilizza il metodo reduce per sommare i prezzi di tutti i prodotti nel carrello
    const totaleNonArrotondato = this.prodottiNelcarello.reduce((acc, prodotto) => acc + prodotto.prezzo, 0);
    // Arrotonda il totale a due cifre decimali utilizzando parseFloat e toFixed
    this.totale = parseFloat(totaleNonArrotondato.toFixed(2));
}
  

}

