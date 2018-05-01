import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { CustomerListService } from '../../service/customer-list.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  cedula: number;

  customerList;
  customer;

  constructor(public navCtrl: NavController,
              private customerListService: CustomerListService) {
  }

  buscarMultas(){

    console.log("this.cedula ", this.cedula);
    if(this.cedula !== null && this.cedula !== undefined){

      this.customerList = this.customerListService.getCustomerByCedula(this.cedula).valueChanges();
      this.customerList.subscribe(val => 
        this.customer = val
      );
    }
  }

}
