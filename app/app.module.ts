// This is the root module

import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { MediaItemComponent } from "./media-item.component"
import { MediaItemListComponent } from "./media-item-list.component";
import { FavoriteDirective } from "./favorite.directive";
import { CategoryListPipe } from "./category-list.pipe";
import { MediaItemFormComponent } from './media-item-form.component';
import { MediaItemService } from './media-item.service';

const lookupLists = {
    mediums: ['Movies', 'Series']
}

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule
    ],
    declarations: [
        AppComponent,
        MediaItemComponent,
        MediaItemListComponent,
        FavoriteDirective,
        CategoryListPipe,
        MediaItemFormComponent
    ],
    // things in provider are added into root injector
    providers: [
        MediaItemService,
        // need to use extra syntax to help inject value types than classes (which just use constructor injection)
        { provide: 'lookupListToken', useValue: lookupLists }
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }