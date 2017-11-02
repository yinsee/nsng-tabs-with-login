import { Component, ViewContainerRef, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Page } from "ui/page";
import { Frame } from "ui/frame";
import { GridLayout } from "ui/layouts/grid-layout"
import { LoginComponent } from '../login/login.component';
import { ModalDialogService, ModalDialogOptions } from "nativescript-angular/modal-dialog";
import { AccountProvider } from "../../services/account.provider";
import { NewsfeedComponent } from "../newsfeed/newsfeed.component";
import { registerElement } from "nativescript-angular";
import * as platformModule from "tns-core-modules/platform";
import { BottomBar, BottomBarItem, TITLE_STATE, SelectedIndexChangedEventData, Notification } from 'nativescript-bottombar';
registerElement('BottomBar', () => BottomBar);

@Component({
    selector: "app-main",
    providers: [
        ModalDialogService
    ],
    moduleId: module.id,
    templateUrl: "main.component.html"
})

export class MainComponent implements OnInit {

    // private navFrame: Frame;
    selectedTab = 0;
    bottombarHeight = 44;

    ngOnInit () {
        if (
            platformModule.isIOS &&
            platformModule.screen.mainScreen.heightDIPs == 812) {
            this.bottombarHeight += 20; // iphoneX
        }
        else if (platformModule.isAndroid) {
            this.bottombarHeight = 56;
        }

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


    // bottombar

    public items: Array<BottomBarItem> = [
        new BottomBarItem(0, "Home", "home", "#f6f6f6"),
        new BottomBarItem(1, "Stay", "sofa", "#f6f6f6", new Notification("white", "red", "1")),
        new BottomBarItem(2, "Share", "plus", "#f6f6f6"),
        new BottomBarItem(3, "Explore", "map_marker", "#f6f6f6"),
        new BottomBarItem(4, "Settings", "settings", "#f6f6f6")
    ];

    public hidden: boolean;
    public titleState: TITLE_STATE;
    public _bar: BottomBar;
    public inactiveColor: string;
    public accentColor: string;

    tabLoaded (event) {
        this._bar = <BottomBar>event.object;
        this.hidden = false;
        this.titleState = TITLE_STATE.SHOW_WHEN_ACTIVE;
        this.inactiveColor = "#999";
        this.accentColor = "black";
    }

    tabSelected (args: SelectedIndexChangedEventData) {
        this.selectedTab = args.newIndex;
    }

}