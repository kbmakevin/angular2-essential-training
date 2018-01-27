import { Pipe } from "@angular/core";

@Pipe({
    name: 'categoryList',
})
export class CategoryListPipe {
    // ng is always expecting a transform method inside of a pipe
    transform(mediaItems) {
        var categories = [];
        mediaItems.forEach(mediaItem => {
            if (categories.indexOf(mediaItem.category) <= -1) {
                categories.push(mediaItem.category);
            }
        });
        return categories.join(', ');
    }
}