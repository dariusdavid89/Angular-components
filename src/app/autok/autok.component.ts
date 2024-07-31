import { Component } from '@angular/core';

@Component({
  selector: 'app-autok',
  templateUrl: './autok.component.html',
  styleUrls: ['./autok.component.css']
})
export class AutokComponent {

  autok: Auto[] = [];

  gyarto: string = "";
  tipus: string = "";
  hengerurtartalom: number | null = null;
  benzinesE: boolean = false;

  felvitel(){
    const ujAuto: Auto = {
      gyarto: this.gyarto,
      tipus: this.tipus,
      hengerurtartalom: this.hengerurtartalom as number,
      benzinesE: this.benzinesE,
    }
   
    this.autok.unshift(ujAuto);

    this.gyarto = "";
    this.tipus = "";
    this.hengerurtartalom = null;
    this.benzinesE = false;
  }

}



interface Auto {

  gyarto: string,
  tipus: string,
  hengerurtartalom: number,
  benzinesE: boolean

}

