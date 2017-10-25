import { Injectable } from '@angular/core';
import { News } from '../models/news';

@Injectable()
export class NewsfeedProvider {

    private _news: News[] = [
        {
            title: "Nullam id dolor id nibh ultricies vehicula ut id elit.",
            content: "Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam.",
            image: "https://images.unsplash.com/photo-1489681215838-e7e1c56c4e17?w=640"
        },
        {
            title: "Sed posuere consectetur est at lobortis.",
            content: "Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Etiam porta sem malesuada magna mollis euismod. Etiam porta sem malesuada magna mollis euismod. Donec id elit non mi porta gravida at eget metus. Nullam quis risus eget urna mollis ornare vel eu leo. Donec ullamcorper nulla non metus auctor fringilla. Maecenas faucibus mollis interdum.",
            image: "https://images.unsplash.com/photo-1472806679307-eab7abd1eb32?w=640"
        },
        {
            title: "Etiam porta sem malesuada magna mollis euismod.",
            content: "Vestibulum id ligula porta felis euismod semper. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Donec ullamcorper nulla non metus auctor fringilla. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.",
            image: "https://images.unsplash.com/photo-1502933691298-84fc14542831?w=640"
        },
        {
            title: "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
            content: "Donec sed odio dui. Nulla vitae elit libero, a pharetra augue. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.",
            image: "https://images.unsplash.com/photo-1490380169520-0a4b88d52565?w=640"
        },
    ];

    public constructor() { }

    getNews () {
        return this._news;
    }

    getNewsByIndex (index) {
        return this._news[index];
    }

}
