import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  //decrire le routes specifique en ahut puis les plus globales en bas car lu d'en haut vers le bas
  {path: 'pokemons', component:ListPokemonComponent },
  // nom de l'url sera pokemons, on lui associe le composant ListPokemonComponent 
  {path: 'pokemon/:id', component:DetailPokemonComponent },
  {path: '', redirectTo:'pokemons', pathMatch: 'full'},
  {path:'**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
