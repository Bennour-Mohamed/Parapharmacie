import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Categories } from 'src/app/models/categories';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient) { }


  private url = 'https://localhost:44333';



  public getCategories(pageNumber: number, pageSize: number): Observable<Categories> {
    return this.http.get<Categories>(this.url + '/api/category/all/' + pageNumber + '/' + pageSize);
  }
}
