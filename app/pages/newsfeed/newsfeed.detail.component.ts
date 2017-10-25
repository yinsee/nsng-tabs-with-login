import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { RouterExtensions } from "nativescript-angular";
import { News } from "../../models/news"
import { ItemEventData } from "ui/list-view";
import { NewsfeedProvider } from "../../services/newsfeed.provider"
import { AccountProvider } from "../../services/account.provider"
import { initializeOnAngular } from 'nativescript-web-image-cache';

@Component({
    selector: "app-newsfeed-detail",
    moduleId: module.id,
    providers: [
        NewsfeedProvider
    ],
    templateUrl: "newsfeed.detail.component.html"
})

export class NewsfeedDetailComponent implements OnInit {

    ngOnInit () {
        initializeOnAngular();
    }

    goback () {
        this.router.back();
    }

    item: News;

    constructor(private account: AccountProvider, private newsfeedProvider: NewsfeedProvider, private router: RouterExtensions, private route: ActivatedRoute) {
        console.log("id = ", this.route.snapshot.params["id"], this.route.snapshot.url.join("/"));
        this.item = newsfeedProvider.getNewsByIndex(this.route.snapshot.params["id"]);
    }

}