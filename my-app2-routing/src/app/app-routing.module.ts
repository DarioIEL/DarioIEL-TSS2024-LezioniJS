import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ChiSiamoComponent } from './chi-siamo/chi-siamo.component';
import { ContattiComponent } from './contatti/contatti.component';
import { DocentiComponent } from './docenti/docenti.component';
import { StudentiComponent } from './studenti/studenti.component';
import { CorsiComponent } from './corsi/corsi.component';

// Qui dentro definisco le rotte come oggetti JS
const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'chi-siamo',
    component: ChiSiamoComponent,
    children: [
      { path: 'docenti', component: DocentiComponent },
      { path: 'studenti', component: StudentiComponent },
      { path: 'corsi', component: CorsiComponent },
    ],
  },
  { path: 'contatti', component: ContattiComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
