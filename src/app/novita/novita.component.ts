import { Component } from '@angular/core';
import { NikeService } from '../services/nike.service';
import { INike } from '../models/INike';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-novita',
  templateUrl: './novita.component.html',
  styleUrl: './novita.component.css'
})
export class NovitaComponent {
  vedere=true
  constructor(private nikeService:NikeService,private route:ActivatedRoute) { }
  scarpe:INike[]
  categoria:INike[]=[]
  ngOnInit():void {
    this.route.params.subscribe(
      (params) => {
          console.log(params['categoria']); // Stampa il valore del parametro 'categoria'
          // Utilizza il valore del parametro 'categoria' per filtrare le scarpe
          this.nikeService.getNikeByCategoria(params['categoria']).subscribe(
            (filteredData) => {
              console.log(filteredData);
              this.categoria = filteredData; // Assegna le scarpe filtrate all'array filtered_shoes
            }
          )
        }  
      )
    
    /*
    scarpe: any[] = [];
  categoria: any[] = [];
  vedere: boolean = true; // Imposta vedere a true per visualizzare tutte le scarpe per impostazione predefinita
  mostra: boolean = false; // Imposta mostra a false per nascondere la sezione delle categorie per impostazione predefinita

  constructor(private nikeService: NikeService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.fetchAllScarpe();

    this.route.params.subscribe(params => {
      const categoria = params['categoria'];
      if (categoria) {
        this.fetchScarpeByCategoria(categoria);
        this.vedere = false; // Nasconde la sezione "mostra" quando viene visualizzata una categoria specifica
        this.mostra = true; // Mostra la sezione "categoria" quando viene visualizzata una categoria specifica
      } else {
        this.fetchAllScarpe();
        this.vedere = true; // Mostra la sezione "mostra" quando vengono visualizzate tutte le scarpe
        this.mostra = false; // Nasconde la sezione "categoria" quando vengono visualizzate tutte le scarpe
      }
    });
  }

  fetchAllScarpe(): void {
    this.nikeService.getNike().subscribe(
      (data) => {
        console.log(data);
        this.scarpe = data;
      }
    );
  }

  fetchScarpeByCategoria(categoria: string): void {
    this.nikeService.getNikeByCategoria(categoria).subscribe(
      (filteredData) => {
        console.log(filteredData);
        this.categoria = filteredData;
      }
    );
  }
    */
  }
  

  
}
