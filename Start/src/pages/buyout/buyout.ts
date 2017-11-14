import {Component} from "@angular/core";
import {NavController, NavParams} from "ionic-angular";

@Component({
  selector:'page-buyout',
  templateUrl:'buyout.html'

})
export class BuyoutPage{

  productData: {name:string,quantity:number}

  constructor(private navParams: NavParams,private navctrl:NavController){
    this.productData = this.navParams.data;
  }

  onCheckout(){

    this.navctrl.popToRoot();
  }

}
