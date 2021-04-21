import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    private products: Product[] = [
        {
            id: "jsdnsbv",
            title: "Medicament",
            price: 1.6,
            createdAt: "06-03-2021",
            categoryName: "Pills",
            categoryId: "wirf"
        },
        {
            id: "jsdnsbvhheh",
            title: "Medicament efferalgant",
            price: 2,
            createdAt: "06-03-2021",
            categoryName: "Pills",
            categoryId: "wirf"
        }
    ];

    constructor() { }

    getProductsFromData(): Product[] {
        return this.products;
    }

    //   addProduct(product: Product) {
    //     product.id = this.products.length + 1;
    //     this.products.push(product);

    //   }
    //   updateProduct(product: Product) {
    //     const index = this.products.findIndex(u => product.id === u.id);
    //     this.products[index] = phase;
    //   }
    //   deletePhase(phase: Phase) {
    //     this.upersons.splice(this.upersons.indexOf(phase), 1);
    //   }

}
