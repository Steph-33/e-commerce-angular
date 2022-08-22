import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  produit : any = {
    id : 0,
    image : "https://backend.panzani.fr/app/uploads/2020/03/penne_3m_associe.png",  
    titre :  "Penne PANZANI", 
    prix : 1.55,
    etat : 0,
  }

  message : string = ''; 

  @Input()
  produits : any[] = []; 

  @Output()
  addProduct : EventEmitter<any> = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  addQuantity(){
    this.produit.etat = this.produit.etat+1; 
  }

  deleteQuantity(){
    if(this.produit.etat > 0){
      this.produit.etat = this.produit.etat-1; 
    } else if (this.produit.etat < 0){
      this.message = "*quantité inférieur à 0"
    } else {
      this.message=''; 
    }
  }

}
