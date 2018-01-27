import { Component } from '@angular/core'

@Component({
    // mw prefix for media-watcher
    selector: 'mw-app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css']
})
export class AppComponent {
    onMediaItemDelete(mediaItem) {
        console.log(mediaItem.name + ' deleted')
    }
    firstMediaItem = {
        id: 1,
        name: 'Firebug',
        medium: 'Series',
        category: 'Science Fiction',
        year: 2010,
        // watchedOn: 1294166565384,
        isFavorite: false
    }
}