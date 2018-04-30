import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Customer } from '../model/customer/customer.model';

@Injectable()
export class CustomerListService{

    private customerListRef = this.db.list<Customer>('customers-list');
    items: AngularFireList<any[]>;

    constructor(private db: AngularFireDatabase){}

    getCustomerList(){
        return this.customerListRef;
    }

    getCustomerByCedula(cedula){
        this.items = this.db.list('/customers-list', ref => ref.orderByChild('cedula').equalTo(cedula));
        return this.items;
    }
}