import { Component, OnInit } from "@angular/core";
import { AccountProvider } from "../../services/account.provider"

@Component({
    selector: "app-explore",
    moduleId: module.id,
    templateUrl: "explore.component.html"
})

export class ExploreComponent implements OnInit {

    ngOnInit () {
    }

    constructor(private account: AccountProvider) {
    }

    login () {
        this.account.broadcastShowLogin();
    }
}