import { Component, OnInit } from "@angular/core";
import { AccountProvider } from "../../services/account.provider"

@Component({
    selector: "app-stay",
    moduleId: module.id,
    templateUrl: "stay.component.html"
})

export class StayComponent implements OnInit {

    ngOnInit () {
    }

    constructor(private account: AccountProvider) {
    }

    login () {
        this.account.broadcastShowLogin();
    }
}