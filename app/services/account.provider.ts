// singleton for User / login etc
import { Injectable } from '@angular/core';
import { User } from '../models/user';
//import { getString, setString } from 'application-settings';
import { Subject } from "rxjs/Subject";

let appSettings = require("application-settings");
@Injectable()
export class AccountProvider {

    public isLoggedIn = false;
    public currentUser: User = new User();

    public constructor() {

        // load from app settings
        let acc = appSettings.getString('account');
        if (acc) {
            this.currentUser = JSON.parse(acc);
            this.isLoggedIn = true;
        }

        console.log('Account provider construct:', JSON.stringify(this.currentUser));
    }

    login (email, password): Promise<any> {
        this.currentUser.email = email;
        this.currentUser.password = password;

        return new Promise((resolve) => {
            this.isLoggedIn = true;
            appSettings.setString('account', JSON.stringify(this.currentUser));
            setTimeout(resolve, 2000);
        });
    }

    logout () {
        this.isLoggedIn = false;
        this.currentUser = new User();
        appSettings.remove('account');
    }


    // UI events bridge
    public $showLogin = new Subject();

    subscribeShowLogin (callback) {
        return this.$showLogin.asObservable().subscribe(callback);
    }
    broadcastShowLogin () {
        this.$showLogin.next();
    }

}