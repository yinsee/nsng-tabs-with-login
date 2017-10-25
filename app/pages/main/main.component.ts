import { Component, ViewContainerRef, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Page } from "ui/page";
import { LoginComponent } from '../login/login.component';
import { ModalDialogService, ModalDialogOptions } from "nativescript-angular/modal-dialog";
import { AccountProvider } from "../../services/account.provider"

@Component({
    selector: "app-main",
    providers: [
        ModalDialogService
    ],
    moduleId: module.id,
    templateUrl: "main.component.html"
})

export class MainComponent implements OnInit {

    ngOnInit () {
        // let tabView = this.page.getViewById("tabView");
        // tabView.ios.tabBar.items[1].badgeValue = '5';
    }

    constructor(private modalService: ModalDialogService, private vcRef: ViewContainerRef, private account: AccountProvider, private page: Page, private router: Router) {
        this.account.subscribeShowLogin(() => {
            this.login();
        })
    }

    login () {
        const options: ModalDialogOptions = {
            viewContainerRef: this.vcRef,
            context: {},
            fullscreen: true,
        };
        this.modalService.showModal(LoginComponent, options).then(() => {
            console.log("login return");
        }).catch(error => {
            console.log(error);
        });
    }

    logout () {
        this.account.logout();
    }

    onIndexChanged (event) {
        //     console.log("Selected index changed! New index: ", event.value);

        //     switch (event.value) {
        //         case 0:
        //             // this.routerExtension
        //             this.router.navigate(["/main", { outlets: { tab0: ["newsfeed"] } }]);
        //             break;
        //         case 1:
        //             this.router.navigate(["/main", { outlets: { tab1: ["stay"] } }]);
        //             break;
        //         case 2:
        //             this.router.navigate(["/main", { outlets: { tab2: ["share"] } }]);
        //             break;
        //         case 3:
        //             this.router.navigate(["/main", { outlets: { tab3: ["explore"] } }]);
        //             break;
        //         case 4:
        //             this.router.navigate(["/main", { outlets: { tab4: ["settings"] } }]);
        //             break;
        //         default:
        //             break;
        //     }
    }
}