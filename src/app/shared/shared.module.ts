import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { StarRatingComponent } from './star-rating/star-rating.component';

@NgModule({
    declarations: [
        StarRatingComponent
    ],
    imports: [
        BrowserModule,
    ],
    exports: [
        CommonModule,
        FormsModule,
        StarRatingComponent
    ]
})
export class SharedModule { }
