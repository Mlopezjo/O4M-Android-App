import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

//import { ProduitFichePage } from '../produit-fiche/produit-fiche';
/**
 * Generated class for the OrderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-order',
  templateUrl: 'order.html',
})
export class OrderPage {
  private order;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.order = this.navParams.data;
  	console.log("video selectionnée", this.order);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderPage');
  }
  /*
  afficheProduit(){
    this.navCtrl.push(ProduitFichePage);
  }
*/
}
