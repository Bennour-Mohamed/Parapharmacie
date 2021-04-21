import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  products: Product[];
  phaseForm: boolean;
  isNewPhase: boolean;
  newPhase: any = {};
  editPhaseForm: boolean;
  editedPhase: any = {};

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.products = this.getProducts();
  }

  getProducts(): Product[] {
    return this.productService.getProductsFromData();
  }

  // showEditPhaseForm(phase: Phase) {
  //   if (!phase) {
  //     this.phaseForm = false;
  //     return;
  //   }
  //   this.editPhaseForm = true;
  //   this.editedPhase = phase;
  // }

  // showAddPhaseForm() {
  //   // resets form if edited user
  //   if (this.phases.length) {
  //     this.newPhase = {};
  //   }
  //   this.phaseForm = true;
  //   this.isNewPhase = true;

  // }

  // savePhase(phase: Phase) {
  //   if (this.isNewPhase) {
  //     // add a new user
  //     this.phaseService.addPhase(phase);
  //   }
  //   this.phaseForm = false;
  // }

  // updatePhase() {
  //   this.phaseService.updatePhase(this.editedPhase);
  //   this.editPhaseForm = false;
  //   this.editedPhase = {};
  // }

  // removePhase(phase: Phase) {
  //   this.phaseService.deletePhase(phase);
  // }

  // cancelEdits() {
  //   this.editedPhase = {};
  //   this.editPhaseForm = false;
  // }

  // cancelNewPhase() {
  //   this.newPhase = {};
  //   this.phaseForm = false;
  // }

}