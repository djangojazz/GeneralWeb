import {Component} from 'angular2/core';
import {MediaItemComponent} from './media-item.component'

@Component({
    selector: 'app',
    directives: [MediaItemComponent],
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