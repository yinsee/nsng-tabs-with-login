import { Component, OnInit } from "@angular/core";
import { AccountProvider } from "../../services/account.provider"

@Component({
    selector: "app-share",
    moduleId: module.id,
    templateUrl: "share.component.html"
})

export class ShareComponent implements OnInit {

    ngOnInit () {
    }

    constructor(private account: AccountProvider) {
    }

    login () {
        this.account.broadcastShowLogin();
    }
}