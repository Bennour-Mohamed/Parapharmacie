import { InterceptorService } from './loader/interceptor.service';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TournoiComponent } from './components/tournoi/tournoi.component';
import { PhaseComponent } from './components/phase/phase.component';
import { JoueurComponent } from './components/joueur/joueur.component';
import { AboutComponent } from './components/about/about.component';
import { ResultComponent } from './components/result/result.component';
import { ProductComponent } from './components/product/product.component';
import { CategoryComponent } from './components/category/category.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ProduitComponent } from './components/produit/produit.component';
import { CategoriesComponent } from './components/categories/categories.component';

import { MatPaginatorModule } from '@angular/material/paginator';



const appRoute: Routes = [
  { path: 'home', component: AppComponent },
  { path: 'product', component: ProductComponent },
  { path: 'category', component: CategoryComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'tournoi', component: TournoiComponent },
  { path: 'phase', component: PhaseComponent },
  { path: 'joueur', component: JoueurComponent },
  { path: 'about', component: AboutComponent },
  { path: 'result', component: ResultComponent },
  { path: 'produit', component: ProduitComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    FlexLayoutModule,
    RouterModule.forRoot(appRoute),
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatPaginatorModule
  ],
  exports: [RouterModule],
  declarations: [
    AppComponent,
    TournoiComponent,
    PhaseComponent,
    JoueurComponent,
    AboutComponent,
    ResultComponent,
    ProductComponent,
    CategoryComponent,
    ProduitComponent,
    CategoriesComponent
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
