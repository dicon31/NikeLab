import {  Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-header1',
  templateUrl: './header1.component.html',
  styleUrl: './header1.component.css'
})
export class Header1Component {
  mouse1: boolean = false;
  mouse2: boolean = false;
  mouse3: boolean = false;
  mouse4: boolean = false;
  mouse5: boolean = false;

  messages: string[] = [
    "<h5>Sono in arrivo i Member Days</h5> Cinque giorni di lanci, allenamenti e sfide in esclusiva per i Member Nike. <a href='#' class='black'>Unisciti a noi.</a>",
    "<h5>Consegna e resi gratuiti</h5> Per i Member Nike, consegna e resi gratuiti entro 30 giorni. <a href='#'>Scopri di più.</a> <a href='#' class='black'>Unisciti a noi.</a>",
    "<h5>Tutti i nuovi arrivi</h5><a href='#' class='black'>Acquista</a>"
  ];

  currentMessage: string = "";
  index: number = 0;
  intervalId: any;

  ngOnInit() {
    this.currentMessage = this.messages[0];
    this.startTimer();
  }

  ngOnDestroy() {
    this.stopTimer();
  }

  startTimer() {
    this.intervalId = setInterval(() => {
      this.currentMessage = this.messages[this.index];
      this.index = (this.index + 1) % this.messages.length;
    }, 5000);
  }

  stopTimer() {
    clearInterval(this.intervalId);
  }

  mostraMouse1() {
    this.mouse1 = true;
    this.mouse2 = false;
    this.mouse3 = false;
    this.mouse4 = false;
    this.mouse5 = false;
    document.getElementById("contenitoreSottomenu").classList.add("mostrato");
}

nascondiMouse1() {
    this.mouse1 = false;
    this.mouse2 = false;
    this.mouse3 = false;
    this.mouse4 = false;
    this.mouse5 = false;
    document.getElementById("contenitoreSottomenu").classList.remove("mostrato");
}

mostraMouse2() {
    this.mouse2 = true;
    this.mouse1 = false;
    this.mouse3 = false;
    this.mouse4 = false;
    this.mouse5 = false;
    document.getElementById("contenitoreSottomenu").classList.add("mostrato");
}

nascondiMouse2() {
    this.mouse2 = false;
    this.mouse1 = false;
    this.mouse3 = false;
    this.mouse4 = false;
    this.mouse5 = false;
    document.getElementById("contenitoreSottomenu").classList.remove("mostrato");
}
mostraMouse3() {
  this.mouse3 = true;
  this.mouse2 = false;
    this.mouse1 = false;
    this.mouse4 = false;
    this.mouse5 = false;
  document.getElementById("contenitoreSottomenu").classList.add("mostrato");
}

nascondiMouse3() {
  this.mouse3 = false;
  this.mouse2 = false;
  this.mouse1 = false;
  this.mouse4 = false;
  this.mouse5 = false;
  document.getElementById("contenitoreSottomenu").classList.remove("mostrato");
}
mostraMouse4() {
  this.mouse4 = true;
  this.mouse3 = false;
  this.mouse2 = false;
  this.mouse1 = false;
  this.mouse5 = false;
  document.getElementById("contenitoreSottomenu").classList.add("mostrato");
}

nascondiMouse4() {
  this.mouse3 = false;
  this.mouse2 = false;
  this.mouse1 = false;
  this.mouse4 = false;
  this.mouse5 = false;
  document.getElementById("contenitoreSottomenu").classList.remove("mostrato");
}
mostraMouse5() {
  this.mouse5 = true;
   this.mouse3 = false;
  this.mouse2 = false;
  this.mouse1 = false;
  this.mouse4 = false;
  document.getElementById("contenitoreSottomenu").classList.add("mostrato");
}

nascondiMouse5() {
  this.mouse5 = false;
  this.mouse3 = false;
  this.mouse2 = false;
  this.mouse1 = false;
  this.mouse4 = false;
  
  document.getElementById("contenitoreSottomenu").classList.remove("mostrato");
}


}
