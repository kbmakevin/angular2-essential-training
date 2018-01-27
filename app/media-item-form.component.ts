import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
    selector: 'mw-media-item-form',
    templateUrl: 'app/media-item-form.component.html',
    styleUrls: ['app/media-item-form.component.css']
})
export class MediaItemFormComponent {
    form

    // ng life cycle event
    ngOnInit() {
        this.form = new FormGroup({
            medium: new FormControl('Movies'),
            name: new FormControl('', Validators.compose([
                Validators.required,
                Validators.pattern('[\\w\\-\\s\\/]+')
            ])),
            category: new FormControl(''),
            // NOTE: we are simply handing over our function, dont need () like built-in validators
            year: new FormControl('', this.yearValidator)
        })
    }

    yearValidator(control) {
        if (control.value.trim().length === 0) {
            return null
        }
        let year = parseInt(control.value)
        let minYear = 1800
        let maxYear = 2500
        if (year >= minYear && year <= maxYear) return null
        else return {
            'year': {
                min: minYear,
                max: maxYear
            }
        }
    }

    onSubmit(mediaItem) {
        console.log(mediaItem)
    }
}