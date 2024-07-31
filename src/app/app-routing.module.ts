import { NgModule } from '@angular/core';
import { RouterModule, RouterOutlet, Routes } from '@angular/router';
import { FooldalComponent } from './fooldal/fooldal.component';
import { RolunkComponent } from './rolunk/rolunk.component';
import { ErrorComponent } from './error/error.component';
import { TermekekComponent } from './termekek/termekek.component';
import { AutokComponent } from './autok/autok.component';
import { KapcsolatComponent } from './kapcsolat/kapcsolat.component';
import { BMIComponent } from './bmi/bmi.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/fooldal',
    pathMatch: 'full',
  },

  {
    path: 'fooldal',
    component: FooldalComponent,
  },

  {
    path: 'rolunk',
    component: RolunkComponent,
  },

  {
    path: 'termekek',
    component: TermekekComponent,
  },

  {
    path: 'autok',
    component: AutokComponent,
  },

  {
    path: 'Bmi',
    component: BMIComponent,
  },

  {
    path: 'kapcsolat',
    component: KapcsolatComponent,
  },

  {
    path: '**',
    component: ErrorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
