import { Category } from './../../models/category';
import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  categories: Category[];
  phaseForm: boolean;
  isNewPhase: boolean;
  newPhase: any = {};
  editPhaseForm: boolean;
  editedPhase: any = {};

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.categories = this.getCategories();
  }

  getCategories(): Category[] {
    return this.categoryService.getCategoriesFromData();
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