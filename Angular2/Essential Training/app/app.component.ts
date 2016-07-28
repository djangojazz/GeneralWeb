import {Component} from 'angular2/core';
import {MediaItemComponent} from './media-item.component'
import {MediaItemListComponent} from './media-item-list.component';

@Component({
    selector: 'app',
    directives: [MediaItemComponent, MediaItemListComponent],
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css']
})

export class AppComponent {
    onMediaItemDeleted(mediaItem) {
        console.log(mediaItem);
        
    }

    firstMediaItem = {
        id: 1,
        name: "Firebug",
        medium: "Series",
        category: "Science Fiction",
        year: 2010,
        watchedOn: null,
        isFavorite: false,
    }
}