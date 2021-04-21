import { Categories } from './../../models/categories';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Produit } from 'src/app/models/produit';
import { ProduitService } from 'src/app/services/produit/produit.service';


@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.scss']
})
export class ProduitComponent implements OnInit {

  constructor(private produitService: ProduitService) { }
  produits: Produit[] = []
  categories: Categories

  addProductForm: boolean;
  ngOnInit(): void {
    this.getProduits();
    this.getCategories();
  }
  getCategories() {
    this.produitService.getCategories()
      .subscribe(data => {
        this.categories = data;
        console.log(data)
      });

  }
  getProduits() {
    this.produitService.getProducts()
      .subscribe(data => {
        this.produits = data;
      })
  }

  showAddProductForm() {
    this.addProductForm = true;
  }

  cancelNewProduct() {
    this.addProductForm = false;
  }
  removeProduct(product: Produit) {
    if (confirm("Are you sure to delete " + product.title)) {
      this.produitService.deleteProduct(product.id).subscribe(data => {
        alert(`${product.title} is deleted succefully`)
        //window.location.reload();
        this.getProduits();
      });
    }
  }


  form = new FormGroup({
    productName: new FormControl('', Validators.required),
    productDescription: new FormControl('', [
      Validators.required,
      Validators.minLength(30),
      Validators.maxLength(250)
    ]),
    productPrice: new FormControl('', [
      Validators.required,
      Validators.min(0.1),
      Validators.max(100000)
    ]),
    categoryId: new FormControl('', [
      Validators.required
    ])
  });

  onSubmit() {
    alert(JSON.stringify(this.form.value));
  }

}
