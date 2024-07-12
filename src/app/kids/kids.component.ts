import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NikeService } from '../services/nike.service';
import { INike } from '../models/INike'; 

@Component({
  selector: 'app-kids',
  templateUrl: './kids.component.html',
  styleUrl: './kids.component.css'
})
export class KidsComponent {
  scarpe: INike[];
  tipo: INike[] = [];
  constructor(private nikeService:NikeService,private route:ActivatedRoute) { }
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      // Utilizza il valore del parametro 'tipo' per filtrare le scarpe
      this.nikeService.getNikeByTipo('Kids').subscribe((filteredData) => {
        console.log(filteredData);
        this.tipo = filteredData; // Assegna le scarpe filtrate all'array 'tipo'
      });
    });
  }
  currentIndex = 0;// Indice della slide attualmente visualizzata
  slideWidth = 610; // Larghezza di ogni slide, puoi aggiornare questo valore in base alle tue esigenze
  items = [
      // Array di oggetti rappresentanti le slide, ogni oggetto contiene l'immagine e il titolo della slide
      { image: '../../assets/kids/primo/bambino1.png', title: 'Tech Fleece' },
      { image: '../../assets/kids/primo/bambino2.png', title: 'EasyOn' },
      { image: '../../assets/kids/primo/bambino3.png', title: 'Teenager' },
      { image: '../../assets/kids/primo/bambino4.png', title: 'Il tuo look Air' },
      { image: '../../assets/kids/primo/bambino5.png', title: 'Phantom Haaland "Force9"' },
      { image: '../../assets/kids/primo/bambino6.png', title: 'Regali per la festa della mamma' },
      
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
