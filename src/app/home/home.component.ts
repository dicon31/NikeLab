import { Component } from '@angular/core';
import { NikeService } from '../services/nike.service';
import { INike } from '../models/INike';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
constructor(private nikeService:NikeService) { }

scarpe:INike[]

ngOnInit(): void {
    /*// Metodo di lifecycle hook di Angular che viene chiamato quando il componente è inizializzato
    // Imposta la larghezza del container dello slider in base alla larghezza di una slide
    // Questo è necessario per il corretto funzionamento del traslazione delle slide
    this.slideWidth = document.querySelector('.slide').clientWidth;*/
    //chiamiamo il metodo getnike del service
    this.nikeService.getNike().subscribe( //subscripre ci permette di eseguire effettiuvamente le richieste ajax e attendere larespnse
    (data)=>{
      console.log(data)
      this.scarpe=data;
      }
    )
 
    

}
// Inizializzazione delle variabili
currentIndex = 0;// Indice della slide attualmente visualizzata
slideWidth = 610; // Larghezza di ogni slide, puoi aggiornare questo valore in base alle tue esigenze
items = [
    // Array di oggetti rappresentanti le slide, ogni oggetto contiene l'immagine e il titolo della slide
    { image: '../../assets/home/homeBox1/immagine1.png', title: 'Air Max Dn' },
    { image: '../../assets/home/homeBox1/immagine2.png', title: 'Regali per la festa della mamma' },
    { image: '../../assets/home/homeBox1/immagine3.png', title: 'Outfit da camminata' },
    { image: '../../assets/home/homeBox1/immagine4.png', title: 'Look da gara' },
    { image: '../../assets/home/homeBox1/immagine5.png', title: 'Air force 1' }
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


currentIndex1 = 0 
slideWidth1 = 610;
sport = [
  {image: '../../assets/home/box2SLIDE/running1.png',nome:'Running'},
  {image: '../../assets/home/box2SLIDE/calcio1.png',nome:'Calcio'},
  {image: '../../assets/home/box2SLIDE/basket1.png',nome:'Basket'},
  {image: '../../assets/home/box2SLIDE/fitness.png',nome:'Fitness'},
  {image: '../../assets/home/box2SLIDE/tennis1.png',nome:'Tennis'},
  {image: '../../assets/home/box2SLIDE/yoga1.png',nome:'Yoga'},
  {image: '../../assets/home/box2SLIDE/skateboard1.png',nome:'Skateboard'},
  {image: '../../assets/home/box2SLIDE/danza1.png',nome:'Danza'}
]
// Metodo per spostarsi alla slide successiva
avanti2() {
  // Verifica se currentIndex è inferiore alla lunghezza dell'array items meno 3 (per mantenere almeno 3 slide visibili)
  if (this.currentIndex1 < this.sport.length - 3) {
      // Se currentIndex è inferiore alla lunghezza consentita, incrementa currentIndex per spostarsi alla slide successiva
      this.currentIndex1++;
  }
}
// Metodo per spostarsi alla slide precedente
dietro2() {
  // Verifica se currentIndex è maggiore di 0
  if (this.currentIndex1 > 0) {
      // Se currentIndex è maggiore di 0, decrementa currentIndex per spostarsi alla slide precedente
      this.currentIndex1--;
  }
}


currentIndex2 = 0 
slideWidth2 = 610;
member = [
  {image: '../../assets/home/banner/banner_1.jpg',nome:'Nike By You',nome1:'Crea modelli unici',buttonse:'Personalizza'},
  {image: '../../assets/home/banner/banner_2.jpg',nome:'Prodotti per i member',nome1:'Il tuo accesso in eslusiva',buttonse:'Acquista'},
  {image: '../../assets/home/banner/banner_3.jpg',nome:'App Nike',nome1:'Sempre al top',buttonse:'Nike App'},
  {image: '../../assets/home/banner/banner_4.jpg',nome1:'Altro ancora dalla membership',buttonse:'Scopri'},
  {image: '../../assets/home/banner/banner_5.jpg',nome:'Ricompense per i member',nome1:'Il nostro modo di ringraziarti',buttonse:'Festeggiamo'},
  {image: '../../assets/home/banner/banner_6.jpg',nome:'Sport e benessere',nome1:'Mouviti al tuo ritmo',buttonse:'Inizia a mouverti'},
  
  
]
avanti3() {
  // Verifica se currentIndex è inferiore alla lunghezza dell'array items meno 3 (per mantenere almeno 3 slide visibili)
  if (this.currentIndex2 < this.member.length - 3) {
      // Se currentIndex è inferiore alla lunghezza consentita, incrementa currentIndex per spostarsi alla slide successiva
      this.currentIndex2++;
  }
}

// Metodo per spostarsi alla slide precedente
dietro3() {
  // Verifica se currentIndex è maggiore di 0
  if (this.currentIndex2 > 0) {
      // Se currentIndex è maggiore di 0, decrementa currentIndex per spostarsi alla slide precedente
      this.currentIndex2--;
  }
}


currentIndex3 = 0 
slideWidth3 = 610;
// Metodo per spostarsi alla slide successiva
avanti4() {
  // Verifica se currentIndex è inferiore alla lunghezza dell'array items meno 3 (per mantenere almeno 3 slide visibili)
  if (this.currentIndex3 < this.scarpe.length -3 ) {
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
