import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductsComponent } from './products/products.component';
import { ProductsCategoryComponent } from './products-category/products-category.component';
import { ProductsQRCategoryComponent } from './products-qrcategory/products-qrcategory.component';
import { DetailsCategoryComponent } from './details-category/details-category.component';

const routes: Routes = [
  {  path: 'home', component:HomeComponent , children:
    [{  path: 'getdetails', component: DetailsCategoryComponent}]
   },
  


  { path: '', redirectTo: 'home', pathMatch: 'full' },
  // path param
  
  {path: 'details/:id',  component:ProductsCategoryComponent},
//  query param
  {path: 'details',  component:ProductsQRCategoryComponent},

  { path: '**' , component:NotFoundComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
