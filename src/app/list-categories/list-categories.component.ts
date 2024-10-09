import { Component } from '@angular/core';
import { Category } from '../models/ category';

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.css']
})
export class ListCategoriesComponent {

  // attributes

  titre:  string = "";
  nom: string="twin";
  items = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];
  isTrue = true;
  nameDetails = 'The name of the actor is <b>BEDHIAFI Okba</b>';

  categories : Category[]=[
    {"id":1,"title":"Grand électroménager",
"image":"assets/images/categorie_electromenager.jpg", "description":"1",
"available":true},
{"id":2,"title":"Petit électroménager",
"image":"assets/images/categorie_petit_electromenager.jpg", "description":"2",
"available":false},
{"id":3,"title":"Produits informatiques",
"image":"assets/images/categorie_produits_informatiques.jpg", "description":"3",
"available":true},
{"id":4,"title":"Smart Phones", "image":"assets/images/categorie_smartPhone.jpg",
"description":"4", "available":true},
{"id":5,"title":"TV, images et son",
"image":"assets/images/categorie_tv_image_son.jpg", "description":"5",
"available":true},
{"id":6,"title":"Produits voiture", "image":"assets/images/produits_nettoyages.jpg",
"description":"6","available":false},
]




// functions
getDateTime(): string {
  return new Date().toLocaleTimeString();
  }
  clickMe(ch: string)
  {
    console.log('test test:' + ch);
  }
  clickImg(description: string)
  {
    alert(description);
  }
}
