import { Injectable } from '@angular/core'; //risorsa fondamentale ci forniscono la DI -dependency Injection
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { INike } from '../models/INike'; 
import { HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class NikeService {

 // URL del servizio che fornisce i dati delle scarpe
 wsProdotti: string = 'http://localhost:3000/prodotti';
 prodottiNelcarello: INike[] = [];

 constructor(private http: HttpClient) { }

 // Metodo per ottenere le informazioni di una scarpa specifica per ID
 getNikeById(id: number): Observable<INike> {
   // Costruisce i parametri della richiesta HTTP
   const params = new HttpParams().set('id', id.toString());
   // Esegue una richiesta GET al servizio con i parametri specificati
   return this.http.get<INike>(this.wsProdotti, { params });
 }

 // Metodo per ottenere tutte le scarpe
 getNike(): Observable<INike[]> { 
   // Esegue una richiesta GET al servizio senza parametri
   return this.http.get<INike[]>(this.wsProdotti);
 }

 // Metodo per ottenere le scarpe per categoria
 getNikeByCategoria(categoria: string): Observable<INike[]> {
   // Costruisce i parametri della richiesta HTTP
   const url = 'http://localhost:3000/prodotti';
   const params = new HttpParams().set('categoria', categoria);
   // Esegue una richiesta GET al servizio con i parametri specificati
   return this.http.get<INike[]>(url, { params }); //l'url comprende anche il parametro
 }
  // Metodo per ottenere le scarpe di un determinato tipo
  getNikeByTipo(tipo: string): Observable<INike[]> {
    // Costruisci i parametri della richiesta HTTP
    const url = 'http://localhost:3000/prodotti';
    const params = new HttpParams().set('tipo', tipo);
    // Esegui una richiesta GET al servizio con i parametri specificati
    return this.http.get<INike[]>(url, { params });
  }
  getProdottiNelCarrello(): INike[] {
    return this.prodottiNelcarello;
  }
  // Metodo per impostare i prodotti nel carrello
  setProdottiNelCarrello(prodotti: INike[]): void {
    this.prodottiNelcarello = prodotti;
  }
  addToCart(scarpa: INike, taglia: string): void {
    // Stampa un messaggio nella console per confermare l'aggiunta della scarpa al carrello, includendo il nome, la taglia e il prezzo della scarpa
    console.log('Aggiunta al carrello:', scarpa.nome, 'Taglia:', taglia, 'Prezzo:', scarpa.prezzo);
  
    // Aggiungi la scarpa al carrello con la taglia specificata. Utilizza l'operatore spread per copiare tutte le proprietà dell'oggetto 'scarpa' e aggiungere la proprietà 'taglia'
    this.prodottiNelcarello.push({
      ...scarpa,
      taglia: taglia
    });
  
    // Stampa il contenuto aggiornato del carrello nella console per scopi di debug
    console.log('Prodotto aggiunto al carrello:', this.prodottiNelcarello);
  }
  
}
