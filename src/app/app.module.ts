import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ListCategoriesComponent } from './list-categories/list-categories.component';
import { FormsModule } from '@angular/forms';
import { ContainsPipe } from './contains.pipe';
import { HighligtDirective } from './highligt.directive';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductsCategoryComponent } from './products-category/products-category.component';
import { DetailsCategoryComponent } from './details-category/details-category.component';
import { ProductsCategoryQPComponent } from './products-category-qp/products-category-qp.component';

@NgModule({
  declarations: [
    // liste des composants, pipes et directives crées
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ListCategoriesComponent,
    ContainsPipe,
    HighligtDirective,
    NotFoundComponent,
    ProductsCategoryComponent,
    DetailsCategoryComponent,
    ProductsCategoryQPComponent,
  ],
  imports: [ //la liste des modules dont a besoin
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [], //services
  bootstrap: [AppComponent]
})
export class AppModule { }
