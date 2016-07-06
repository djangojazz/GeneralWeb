import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    templateUrl: 'partials/app.html'
})

export class AppComponent{
    name = 'Brett';
    artists = ['Barot Bellingham', 'Jonathan Ferrar', 'Hillary Post' ];

    onClick(myName, myElement) {
        this.name = myName;
        myElement.style.backgroundColor="#FECE4E"
    }

    addArtist(myArtist) {
        this.artists.push(myArtist);
    }
}