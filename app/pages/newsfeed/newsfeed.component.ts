import { Component, OnInit } from "@angular/core";
import { News } from "../../models/news"
import { ItemEventData } from "ui/list-view";
import { NewsfeedProvider } from "../../services/newsfeed.provider"
import { AccountProvider } from "../../services/account.provider"
import { initializeOnAngular } from 'nativescript-web-image-cache';

@Component({
    selector: "app-newsfeed",
    moduleId: module.id,
    providers: [
        NewsfeedProvider
    ],
    templateUrl: "newsfeed.component.html"
})

export class NewsfeedComponent implements OnInit {

    news: News[] = [];

    ngOnInit () {
        initializeOnAngular();
    }

    onItemLoading (args: ItemEventData) {
        if (args.ios) {
            // args.ios is instance of UITableViewCell
            // args.ios.accessoryType = 1; // UITableViewCellAccessoryDisclosureIndicator
        }
    }

    constructor(private account: AccountProvider, private newsfeedProvider: NewsfeedProvider) {
        this.news = this.newsfeedProvider.getNews();
    }

}