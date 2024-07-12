import { Component } from '@angular/core';
import { NikeService } from '../services/nike.service';
import { INike } from '../models/INike';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-carello',
  templateUrl: './carello.component.html',
  styleUrl: './carello.component.css'
})
export class CarelloComponent {
  // Array che conterrà i prodotti nel carrello
  prodottiNelcarello: INike[] = [];
  
  // Variabile che conterrà il totale dei prezzi dei prodotti nel carrello
  totale: number = 0;
  
  // Array per memorizzare i dati delle scarpe
  scarpe: INike[] = [];

  constructor(private nikeService: NikeService) { }

  ngOnInit(): void {
    // All'inizio dell'inizializzazione del componente, ottieni i prodotti nel carrello dal servizio NikeService
    this.prodottiNelcarello = this.nikeService.getProdottiNelCarrello();

    // Calcola il totale dei prezzi dei prodotti nel carrello
    this.calcolaTotale();

    // Stampa i prodotti nel carrello nella console per scopi di debug
    console.log('Prodotti nel carrello:', this.prodottiNelcarello);

    // Ottieni tutti i prodotti Nike tramite il servizio NikeService
    this.nikeService.getNike().subscribe(
      // Subscribe ci permette di eseguire effettivamente le richieste AJAX e attendere la risposta
      (data: INike[]) => {
        // Stampa i dati dei prodotti ottenuti nella console per scopi di debug
        console.log(data);

        // Memorizza i dati dei prodotti nella variabile scarpe
        this.scarpe = data;
      }
    );
  }

  // Metodo per calcolare il totale dei prezzi dei prodotti nel carrello
  calcolaTotale() {
    // Utilizza il metodo reduce per sommare i prezzi di tutti i prodotti nel carrello
    const totaleNonArrotondato = this.prodottiNelcarello.reduce((acc, prodotto) => acc + prodotto.prezzo, 0);
    // Arrotonda il totale a due cifre decimali utilizzando parseFloat e toFixed
    this.totale = parseFloat(totaleNonArrotondato.toFixed(2));
}

  // Proprietà per gestire l'indice corrente dello slider
  currentIndex3 = 0;
  
  // Larghezza di una singola slide
  slideWidth3 = 610;

  // Metodo per spostarsi alla slide successiva
  avanti4() {
    // Verifica se currentIndex è inferiore alla lunghezza dell'array scarpe meno 3 (per mantenere almeno 3 slide visibili)
    if (this.currentIndex3 < this.scarpe.length - 3) {
      // Se currentIndex è inferiore alla lunghezza consentita, incrementa currentIndex per spostarsi alla slide successiva
      this.currentIndex3++;
    }
  }

  // Metodo per spostarsi alla slide precedente
  dietro4() {
    // Verifica se currentIndex è maggiore di 0
    if (this.currentIndex3 > 0) {
      // Se currentIndex è maggiore di 0, decrementa currentIndex per spostarsi alla slide precedente
      this.currentIndex3--;
    }
  }

  delete(i: number): void {
    // Verifica se l'indice i è valido e non supera la lunghezza dell'array prodottiNelcarello
    if (i >= 0 && i < this.prodottiNelcarello.length) {
      // Ottieni il prezzo del prodotto da rimuovere
      const prezzoProdottoRimosso = this.prodottiNelcarello[i].prezzo;
      // Rimuovi il prodotto dall'array prodottiNelcarello utilizzando splice
      this.prodottiNelcarello.splice(i, 1);
      // Sottrai il prezzo del prodotto rimosso dal totale
      this.totale -= prezzoProdottoRimosso;
      // Salva i prodotti aggiornati nel carrello nel servizio NikeService (se necessario)
      this.nikeService.setProdottiNelCarrello(this.prodottiNelcarello);
    }
  }
  

}
