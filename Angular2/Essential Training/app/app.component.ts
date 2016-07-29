import {Component} from 'angular2/core';
import {MediaItemComponent} from './media-item.component'
import {MediaItemListComponent} from './media-item-list.component';
import {MediaItemFormComponent} from './media-item-form.component';

@Component({
    selector: 'app',
    directives: [MediaItemComponent, MediaItemListComponent, MediaItemFormComponent],
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css']
})

export class AppComponent {

    //Synthesizing a delete
    // onMediaItemDeleted(mediaItem) {
    //     console.log(mediaItem);
        
    // }

//This was for the media-item.component done manually in the first section
    // firstMediaItem = {
    //     id: 1,
    //     name: "Firebug",
    //     medium: "Series",
    //     category: "Science Fiction",
    //     year: 2010,
    //     watchedOn: null,
    //     isFavorite: false,
    // }
}