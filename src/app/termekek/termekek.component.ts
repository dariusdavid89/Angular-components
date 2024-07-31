import { Component } from '@angular/core';
import { Termekek } from '../termekek';

@Component({
  selector: 'app-termekek',
  templateUrl: './termekek.component.html',
  styleUrls: ['./termekek.component.css']
})
export class TermekekComponent {

  termekek: Termekek[] = [

    {
      cikkszam: "asd00001",
      gyarto: "samsung",
      nettoar: 299999,
      afa: 27,


    },

    {
      cikkszam: "asd0002122",
      gyarto: "lg",
      nettoar: 199999,
      afa: 27,


    },

    {
      cikkszam: "asd23232",
      gyarto: "apple",
      nettoar: 599999,
      afa: 27,


    },

    {
      cikkszam: "asd001212",
      gyarto: "alcatel",
      nettoar: 100000,
      afa: 27,


    },

    {
      cikkszam: "asd002331",
      gyarto: "honor",
      nettoar: 129999,
      afa: 27,


    },

  ]
  
  cikkszam: string = "";
  gyarto: string = "";
  nettoar: number | null = null;
  afa: number | null = null;
  Atlag: number | null = null;
 
  felvitel(){

    const ujTermek: Termekek = 
    {
      cikkszam: this.cikkszam,
      gyarto: this.gyarto,
      nettoar: this.nettoar as number,
      afa: this.afa as number,

    };

    
    const isValid: boolean = Object.values(ujTermek).every(function(value){
      return !!value
    });

    if(isValid){
      this.termekek.unshift(ujTermek)
    };

    this.cikkszam = "";
    this.gyarto = "";
    this.nettoar = null;
    this.afa = null;

  }

  bruttoAtlag(){
    
    let ossz = 0;

    for(let i = 0; i < this.termekek.length; i++){

      
      ossz += this.termekek[i].nettoar * this.termekek[i].afa

    }

    this.Atlag = ossz / this.termekek.length
  }
  
}

