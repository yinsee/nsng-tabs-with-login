import { Component, OnInit } from "@angular/core";
import { AccountProvider } from "../../services/account.provider"

@Component({
    selector: "app-settings",
    moduleId: module.id,
    templateUrl: "settings.component.html"
})

export class SettingsComponent implements OnInit {

    ngOnInit () {
    }

    constructor(private account: AccountProvider) {
    }

    login () {
        this.account.broadcastShowLogin();
    }
}