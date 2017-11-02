import { Component, OnInit } from "@angular/core";
import { AccountProvider } from "../../services/account.provider";
import { Image } from "ui/image";
import { Page } from "ui/page";
import { ImageAsset } from "image-asset";
import { ImageSource } from "image-source";
import { takePicture, requestPermissions, isAvailable } from "nativescript-camera";
import * as imagepicker from "nativescript-imagepicker";
import { LoadingIndicator } from "nativescript-loading-indicator";

@Component({
    selector: "app-share",
    moduleId: module.id,
    templateUrl: "share.component.html"
})

export class ShareComponent implements OnInit {

    preview: Image;

    ngOnInit () {
        // requestPermissions(); required for android 6.0
        this.preview = this.page.getViewById("preview");
    }

    constructor(private account: AccountProvider, private page: Page) {

    }

    takephoto () {

        let options = {
            width: 1024,
            height: 1024,
            keepAspectRatio: true,
            saveToGallery: false,
        };

        takePicture(options)
            .then(imageAsset => {
                return (new ImageSource).fromAsset(imageAsset)
            })
            .then((source: ImageSource) => {
                this.preview.imageSource = source
            })
            .catch(err => {
                alert(err.message);
            });

    }

    pickphoto () {
        let context = imagepicker.create({
            mode: "single", // use "multiple" for multiple selection
        });

        var loader = new LoadingIndicator();
        loader.show();

        context
            .authorize()
            .then(() => {
                loader.hide();
                return context.present();
            })
            .then((selection) => {
                if (selection.length > 0) {
                    return selection[0].getImage();
                }
                else {
                    throw Error("No image selected");
                }
            })
            .then((source: ImageSource) => {
                this.preview.imageSource = source
            })
            .catch(function (e) {
                loader.hide();
                console.log(e);
            });
    }
}