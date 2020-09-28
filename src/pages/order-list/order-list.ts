import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// Requêtage http
import { HttpClient } from '@angular/common/http';
// Fiche d'une vidéo
import { param } from '../../param/param';
import { OrderPage } from '../order/order';
/**
 * Generated class for the OrderListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-order-list',
  templateUrl: 'order-list.html',
})
export class OrderListPage {
  private id = 2;
private listeOrders;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public httpClient: HttpClient) {
    httpClient.get(param.orders+'customer='+this.id+'&'+param.CKCS)
    	.subscribe(data => {
        this.listeOrders = data;
        console.log(this.listeOrders);
        
    	}) 
  }
  

  afficheCommande(event, order){
    this.navCtrl.push(OrderPage, order);
  }

}
