import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular";
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

    onItemTap (args: ItemEventData) {
        this.router.navigate(["/main", { outlets: { tab0: ["newsfeed", args.index] } }]);
    }

    onItemLoading (args: ItemEventData) {
        if (args.ios) {
            // args.ios is instance of UITableViewCell
            // args.ios.accessoryType = 1; // UITableViewCellAccessoryDisclosureIndicator
        }
    }

    constructor(private account: AccountProvider, private newsfeedProvider: NewsfeedProvider, private router: RouterExtensions) {
        this.news = this.newsfeedProvider.getNews();
    }

}