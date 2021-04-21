import { Injectable } from '@angular/core';
import { Produit } from 'src/app/models/produit';
import { Categories } from 'src/app/models/categories';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const httpOptions = {
    headers: new HttpHeaders({ 'content-Type': 'application/json' })
};

@Injectable({
    providedIn: 'root'
})

@Injectable()
export class ProduitService {

    constructor(private http: HttpClient) { }

    //private urlmocky = 'https://run.mocky.io/v3'///eabebcfd-fc2e-4b32-8e55-ed0c28fdd955';


    private url = 'https://localhost:44333';

    products: Produit[] = []

    public getProducts() {
        //return this.http.get<Produit[]>(this.urlmocky + '/eabebcfd-fc2e-4b32-8e55-ed0c28fdd955');
        return this.http.get<Produit[]>(this.url + '/api/product/all');
    }
    public getCategories() {
        // return this.http.get<Categories>(this.urlmocky + '/db2e868c-ec0f-4cc6-b3d7-bbc2fa657b9a');
        return this.http.get<Categories>(this.url + '/api/category/all');
    }
    public deleteProduct(id: string) {
        return this.http.delete(this.url + '/api/product/delete/' + id);
        //return this.http.delete(`${this.url}/api/product/delete/${id}`);
    }
}
