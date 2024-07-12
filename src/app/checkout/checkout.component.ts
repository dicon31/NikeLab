import { Component } from '@angular/core';
import { INike } from '../models/INike';
import { NikeService } from '../services/nike.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {
  /*qui vado a d impostare una proprieta per il form che contera il valore corrente della digitato nella casella di input
  con l ngmodel noi ugugliamo al valore della proprieta definita nel typescript*/
  apri: boolean = true; // Controlla la visibilità del modulo e della visualizzazione dei dati
  visible: boolean = false;
  truee: boolean = false;
  nome: string = '';
  cognome: string = '';
  indirizzo: string = '';
  email: string = '';
  telefono: string = '';
  carta: string = '';
  scadenza: string = '';
  cvv: string = '';
 
  constructor(private nikeService: NikeService,private router: Router) { }

  salva(form: any) {
    if (!this.nome || !this.cognome || !this.indirizzo || !this.email || !this.telefono) {
        console.log('Compila tutti i campi prima di inviare il modulo!');
        alert('Compila tutti i campi prima di inviare il modulo!')
        return; // Esci dal metodo se almeno uno dei campi è vuoto
    }else{
      console.log('Form inviato');
      console.log('Nome:', this.nome);
      console.log('Cognome:', this.cognome);
      console.log('Indirizzo:', this.indirizzo);
      console.log('Email:', this.email);
      console.log('Telefono:', this.telefono);
      this.apri = false; // Nascondi il modulo e mostra i dati
      this.visible = true;
      this.truee = true;
    }

}

  salva2(form: any) {
    
    if (!this.carta|| !this.scadenza || !this.cvv) {
      console.log('Compila tutti i campi prima di inviare il modulo!');
      alert('Compila tutti i campi prima di inviare il modulo!')
      return; // Esci dal metodo se almeno uno dei campi è vuoto
    } else {
      console.log('Form di pagamento inviato');
      console.log('Numero Carta:', this.carta);
      console.log('Scadenza:', this.scadenza);
      console.log('CVV:', this.cvv);
      alert("Pagamento riuscito");
      this.resetform()
      // Naviga verso la pagina di ringraziamento dopo il pagamento riuscito
      this.router.navigate(['/graziepagina']);
    }
  }

  indietro() {
    console.log('MODIFICA')
    this.apri = true; // Mostra il modulo per modificare i dati
    this.visible =false;
    this.truee = false;
  }

  prodottiNelcarello: any; // Array che conterrà i prodotti nel carrello
  totale: number = 0; // Variabile che conterrà il totale dei prezzi dei prodotti nel carrello


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

  resetform(){
    this.nome="";
    this.cognome="";
    this.indirizzo="";
    this.email="";
    this.telefono="";
    this.carta="";
    this.scadenza="";
    this.cvv="";
    this.prodottiNelcarello=[];
  }
}
