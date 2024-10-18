import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products-category-qp',
  templateUrl: './products-category-qp.component.html',
  styleUrls: ['./products-category-qp.component.css']
})
export class ProductsCategoryQPComponent implements OnInit{
  id !: number;
  constructor(private ac:ActivatedRoute) {
    console.log("je suis constructeur");
   }

  ngOnInit(){
    //this.id=this.ac.snapshot.queryParams['id']; //data synchrone il doit avoir l'id pour passer a l'instruction 19
    this.ac.queryParams.subscribe(res=>this.id=res['id']); //data asynchrone il passe a l'instruction 19 et attend les donnees
    /*this.ac.paramMap.subscribe(res=>
      {
        this.id=Number(res.get('id'));
        for(let p of this.listProducts)
          {
            if (p.categoryId == this.id){
            this.list.push(p);
          }
          }
      }
    );//meme chose que params*/
    console.log("je suis ngOnInit");
  }


}
