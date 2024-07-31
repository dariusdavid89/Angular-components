import { Component } from '@angular/core';

interface Bmi {
  suly: number;
  magassag: number;
  kategoriak: string;
  bmi: number;
}

@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.css'],
})
export class BMIComponent {
  suly: number = 0;
  magassag: number = 0;
  eredmenyek: Bmi[] = [];

  kategoria(bmi: number): string {
    if (bmi < 16) return 'Erősen Vékony';
    if (bmi >= 16 && bmi < 17) return 'Vékony';
    if (bmi >= 17 && bmi < 18.5) return 'Még mindig Vékony';
    if (bmi >= 18.5 && bmi < 25) return 'Normál';
    if (bmi >= 25 && bmi < 30) return 'Túlsúlyos';
    return 'Elhízott';
  }

  EredmenyMentes() {
    const bmi: number = (this.suly / (this.magassag * this.magassag)) * 10000;
    if (this.magassag > 0) {
      this.eredmenyek.push({
        suly: this.suly,
        magassag: this.magassag,
        bmi: bmi,
        kategoriak: this.kategoria(bmi),
      });
    } else console.error('magasság nem lehet 0 vagy negatív!');
  }
}
