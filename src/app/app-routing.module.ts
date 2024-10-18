import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductsCategoryComponent } from './products-category/products-category.component';
import { DetailsCategoryComponent } from './details-category/details-category.component';
import { ProductsCategoryQPComponent } from './products-category-qp/products-category-qp.component';

//ce fichier a ete generer lors de la creation du projet en repondant par yes a la premiere question
//definir nos routes
const routes: Routes = [
 {path:"home", component:HomeComponent,children:
  [
    {  path: 'getdetails', component: DetailsCategoryComponent}
  ]
 },
 { path: "", redirectTo: "home", pathMatch: "full" },
 {path:"notFound", component:NotFoundComponent},
 {path:"products/:id", component:ProductsCategoryComponent}, //pathParam
 {path:"products", component:ProductsCategoryQPComponent}, //QueryParam
 ​{
  path: 'contact',
  loadChildren: () =>
  import('./contact/contact.module').then((m) => m.ContactModule),
  },
  ​{
    path: 'apropos',
    loadChildren: () =>
    import('./apropos/apropos.module').then((m) => m.AproposModule),
    },
 {path:"**", component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
