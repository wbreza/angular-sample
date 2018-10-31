import { Component, OnInit } from '@angular/core';
import { IProduct, ProductService } from './products.service';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
    constructor(private productService: ProductService) {
        this.title = 'Product List';
        this.products = [];
    }

    title: string;
    products: IProduct[] = [];

    ngOnInit() {
        this.productService
            .getProducts()
            .subscribe(products => this.products = products);
    }

    onRatingChange(message: string): void {
        alert(message);
    }
}
