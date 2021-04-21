import { Injectable } from '@angular/core';
import { Category } from './../models/category';

@Injectable({
    providedIn: 'root'
})
export class CategoryService {

    private categories: Category[] = [
        {
            id: "jsdnsbv",
            name: "Homme",
            description: "Category Hommes",
            createdAt: "06-03-2021"

        },
        {
            id: "jsdnsbvfdsvdsdf",
            name: "Femme",
            description: "Category Femme",
            createdAt: "06-03-2021"
        }
    ];

    constructor() { }

    getCategoriesFromData(): Category[] {
        return this.categories;
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
