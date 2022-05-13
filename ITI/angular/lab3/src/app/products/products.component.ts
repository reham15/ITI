import { Component, OnInit } from '@angular/core';
import {Product} from "../Models/product";
declare var window: any;
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {




 addproduct=false;
 Rate:number=0;
  product:Product|null=null;
  idToEdit:number|null=null;
  products:Product[]=[];
 showImage=false;
availableDate:Date=new Date();
filter:string='';
  formModal: any;
  constructor() { }
  ngOnInit(): void {

  }

  add(id:string,name:string,code:string,price:string,image:string) {

    let product:Product =new Product(Number(id),name,code,this.availableDate,Number(price),this.Rate,image);
    this.products.push(product);
    this.addproduct=false;


  }
  show(id:string)
  {
    this.products.forEach((product)=>{

      if(product.id===Number(id))
      {
        this.product=product;
      }


    });

  }

  delete(id:string)
  {
    this.products.forEach((product,index)=>{

      if(product.id===Number(id))
      {
        this.products.splice(index,1);
      }
      this.product=null;


    });

  }
  edit(id:string)
  {
    this.idToEdit=Number(id);

  }
  update(id:string,name:string,code:string,price:string,image:string)

  {this.products.forEach((product)=>{

    if(product.id===this.idToEdit)
    {  let productUpdated:Product =new Product(Number(id),name,code,this.availableDate,Number(price),this.Rate,image);

      product.name=productUpdated.name;
      product.code=productUpdated.code;
      product.price=productUpdated.price;
      product.rating=productUpdated.rating;
      product.image=productUpdated.image;
      product.available=productUpdated.available;

      this.idToEdit=null;

    }


  });}
  rate(value:string)
  {
   this.Rate=Number(value);
  }
  showImages()
  {
    this.showImage=true;
  }



  openFormModal() {
    this.formModal = new window.bootstrap.Modal(
      document.getElementById('myModal')
    );
   console.log( this.formModal);
  }


}



