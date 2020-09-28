import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { OrderListPage } from '../order-list/order-list';

import { HttpClient } from '@angular/common/http';
import { AppService } from '../../services/appService';
import { param } from '../../param/param';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private user:any = {
    login : null,
    mdp:null
  };
  
  constructor(
    public navCtrl: NavController, 
    public navParam: NavParams, 
    public httpClient: HttpClient, 
    public appService: AppService) {
      this.chargeUser();
  }
  chargeUser(){
    let userLocal = this.appService.getLocal(param.localStore);
    if(userLocal != null){
      this.navCtrl.push(OrderListPage);
    }
  }

  onLogin(){
    console.log(this.user.login, this.user.mdp);
    this.httpClient.post(param.connect,"username="+this.user.login+"&password=", this.user.mdp)
      .subscribe(data => {
        if(data != null){
          this.user = data;
          this.navCtrl.push(OrderListPage);
        }else{
          this.msg = param.cnxNonOk;
        }
      })
  }
  decnx(){
    this.appService.removeLocal(param.localStore);
    this.user = {
      login : null,
      mdp : null
    };
    this.msg = param.cnxNonOk;
  }

  afficheListeCommande(){
    
  }

}
