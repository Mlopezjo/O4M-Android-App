import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProduitFichePage } from './produit-fiche';

@NgModule({
  declarations: [
    ProduitFichePage,
  ],
  imports: [
    IonicPageModule.forChild(ProduitFichePage),
  ],
})
export class ProduitFichePageModule {}
