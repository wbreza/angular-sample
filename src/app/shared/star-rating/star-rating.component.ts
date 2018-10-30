import { Component, Input, OnChanges, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-star-rating',
    templateUrl: './star-rating.component.html',
    styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent implements OnChanges {
    @Input()
    rating: number;

    @Output()
    change: EventEmitter<string> = new EventEmitter<string>();

    numbers: any[];

    ngOnChanges(changes): void {
        this.numbers = Array(this.rating).fill(1, this.rating);
    }

    onRatingClick(evt) {
        console.log('foobar');
        this.change.emit(`Rating is ${this.rating}`);
    }
}
