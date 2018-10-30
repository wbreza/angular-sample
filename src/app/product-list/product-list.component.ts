import { Component, OnInit } from '@angular/core';

export interface IProduct {
    name: string;
    category: string;
    price: number;
    rating: number;
}

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
    constructor() {
        this.title = 'Product List';
        this.products = [];
    }

    title: string;
    products: IProduct[] = [];

    ngOnInit() {
        setTimeout(() => {
            this.products.push({
                name: 'Bike',
                price: 129.99,
                category: 'Sports',
                rating: 4
            });
            this.products.push({
                name: 'Tomato',
                price: 1.99,
                category: 'Vegetable',
                rating: 5
            });
            this.products.push({
                name: 'Pizza',
                price: 12.99,
                category: 'Food',
                rating: 3
            });
        }, 1000);
    }

    onRatingChange(message: string): void {
        alert(message);
    }
}
