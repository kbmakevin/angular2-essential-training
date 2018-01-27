import { Component, Input, Output, EventEmitter } from '@angular/core';
import { log } from 'core-js/library/web/timers';

@Component({
  selector: 'mw-media-item',
  templateUrl: 'app/media-item.component.html',
  styleUrls: ['app/media-item.component.css']
})
export class MediaItemComponent {
  onDelete() {
    console.log("deleted")
  }
}
