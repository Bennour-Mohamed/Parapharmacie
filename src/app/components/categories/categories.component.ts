import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Categories } from 'src/app/models/categories';
//import { Categories } from 'src/app/models/category';
import { CategoriesService } from 'src/app/services/category/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  categories: Categories;
  pageNumber: number = 1;
  pageEvent: PageEvent;

  constructor(private categoryService: CategoriesService) { }

  ngOnInit(): void {
    this.getCategories()
  }
  getCategories() {
    this.categoryService.getCategories(this.pageNumber, 2)
      .subscribe(data => { this.categories = data; });
  }
  //////////////////
  onPaginateChange(event: PageEvent) {
    let page = event.pageIndex; //pagenumber
    let size = event.pageSize;// pagesize
    page = page + 1;
    this.categoryService.getCategories(page, size)
      .subscribe(data => {
        this.categories = data;
      });
  }
}
