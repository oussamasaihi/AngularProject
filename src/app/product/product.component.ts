import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  prop:boolean=false
  message:string=''
  prop1="hello"
  prixMax:number=0;
  
  product!: Product;
  list!: Product[] ;
  
    constructor() { }
  
    ngOnInit(): void {
      this.product=new Product();
      this.list=[]
    }
  
    add(){
      this.list.push(this.product)
      console.log(JSON.stringify(this.list))
    }
  
  }
  
  class Product{
    id:any;
    title:any;
    price:any;
    nbr_hour:any ;
    like:any;
  

}
