import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

export interface IProduct {
    id: number;
    name: string;
    description;
    category: string;
    price: number;
    rating: number;
}

@Injectable({ providedIn: 'root' })
export class ProductService {
    constructor(private http: HttpClient) {
    }

    getProducts(): Observable<IProduct[]> {
        const products: IProduct[] = [];
        const productCount = 10;

        return this.http.get<IProduct[]>('/api/products/products.json');
    }

    getProduct(id: number): Observable<IProduct> {
        const product = new Subject<IProduct>();
        this.getProducts()
            .subscribe(products => {
                const matchingProduct = products.find(p => p.id === id);
                product.next(matchingProduct);
            });

        return product.asObservable();
    }
}
