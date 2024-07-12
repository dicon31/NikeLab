import { Component } from '@angular/core';
import { INike } from '../models/INike'; 
import { ActivatedRoute } from '@angular/router';
import { NikeService } from '../services/nike.service';
@Component({
  selector: 'app-uomo',
  templateUrl: './uomo.component.html',
  styleUrl: './uomo.component.css'
})
export class UomoComponent {

  scarpe: INike[];
  tipo: INike[] = [];
  constructor(private nikeService:NikeService,private route:ActivatedRoute) { }
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      // Utilizza il valore del parametro 'tipo' per filtrare le scarpe
      this.nikeService.getNikeByTipo('Uomo').subscribe((filteredData) => {
        console.log(filteredData);
        this.tipo = filteredData; // Assegna le scarpe filtrate all'array 'tipo'
      });
    });
  }
  currentIndex = 0;// Indice della slide attualmente visualizzata
  slideWidth = 610; // Larghezza di ogni slide, puoi aggiornare questo valore in base alle tue esigenze
  items = [
      // Array di oggetti rappresentanti le slide, ogni oggetto contiene l'immagine e il titolo della slide
      { image: '../../assets/uomo/primo/imagine1.png', title: 'Air Max Dn',title1:'Unreal Camavinga',button:'Acquista' },
      { image: '../../assets/uomo/primo/imagine2.png', title: 'Nike Tiempo Emerald',title1:'Un tocco che brilla',button:'Acquista' },
      { image: '../../assets/uomo/primo/imagine3.png', title: 'Air Force 1 Flyknit 2.0',title1:'Un classico reinventato',button:'Acquista' },
      { image: '../../assets/uomo/primo/imagine4.png', title: 'Nike V2K Run',title1:'Un classico reinventato',button:'Acquista' },
      { image: '../../assets/uomo/primo/imagine5.png', title: 'Una vera icona',title1:'Dunk Low',button:'Acquista' }
      // Puoi aggiungere altri oggetti per aggiungere più slide
  ];
  // Metodo per spostarsi alla slide successiva
  avanti1() {
    // Verifica se currentIndex è inferiore alla lunghezza dell'array items meno 3 (per mantenere almeno 3 slide visibili)
    if (this.currentIndex < this.items.length - 3) {
        // Se currentIndex è inferiore alla lunghezza consentita, incrementa currentIndex per spostarsi alla slide successiva
        this.currentIndex++;
    }
  }
  
  // Metodo per spostarsi alla slide precedente
  dietro1() {
    // Verifica se currentIndex è maggiore di 0
    if (this.currentIndex > 0) {
        // Se currentIndex è maggiore di 0, decrementa currentIndex per spostarsi alla slide precedente
        this.currentIndex--;
    }
  }

  Sport = [
    {img:'../../assets/uomo/terzo/imagine1.png',titolo:'Articoli outerwear indispensabili',button:'Acquista'},
    {img:'../../assets/uomo/terzo/imagine2.png',titolo:'Look a strati ad alte prestazione',button:'Acquista'}
  ]

  currentIndex3 = 0 
  slideWidth3 = 610;
// Metodo per spostarsi alla slide successiva
avanti4() {
  // Verifica se currentIndex è inferiore alla lunghezza dell'array items meno 3 (per mantenere almeno 3 slide visibili)
  if (this.currentIndex3 < this.tipo.length -3 ) {
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
}
