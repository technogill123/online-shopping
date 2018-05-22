import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-result',
  template: `
  <h2 float="right">PRODUCTS</h2>
  <div *ngFor="let prod of product" class="card" >
  <img src="{{prod.url}}" alt="shoe">
  <h3>{{prod.name}}</h3>
  <p class="title">{{prod.desc}}</p>
  <p>$ {{prod.price}}</p>
  <p><button (click)="addToCart(prod)" *ngIf ="!prod.isInCart">Add to Cart</button></p>
      <p><button (click)="removeFromCart(prod)" *ngIf="prod.isInCart">Remove from Cart</button></p>
      </div>
  `,
  styles: [

    `
    .card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    max-width: 300px;
    text-align: center;
    font-family: arial;
    float :left;
    background-color:#DCDCDC ;
    margin-left: 120px;
    margin-top: 50px;
   
    
    }
    .image{
    height:40em; background-size:cover; width:auto;
    background-image:url('');
    background-color:#F5FFFA;
    background-position:50% 50%;
    
    }
    img{
    width: 250px;
    height: 150px;
    transition: transform .2s;
    }
    div{
    
    padding:10px;
   
    }
   
   
    h2{
    color: grey;
    font-size: 35px;
    font-family: arial;
    opacity: 0.7;
    margin-left:30px;
    margin-top: 30px;
   
    }
    .title {
    color: grey;
    font-size: 15px;
    
    }
    
    button {
    border: none;
    outline: 0;
    display: inline-block;
    padding: 5px;
    color: white;
    background-color: #000;
    text-align: center;
    cursor: pointer;
    width: 70%;
    font-size: 18px;
    cursor: pointer;
    }
    
    a {
    text-decoration: none;
    font-size: 22px;
    color: black;
    }
    
    button:hover, a:hover {
    opacity: 0.7;
    }
    img:hover{
    
    transform: scale(1.25); 
    transform: scale(1.25); 
    transform: scale(1.25); 
    }
    `

  ]
})
export class ResultComponent implements OnInit {
  public change = true;
  public product=[];
  public count = 0;
  price='';
  desc='';
  name='';
  category='';
  constructor(private products: ProductsService) { }

  ngOnInit() {
    this.product=this.products.getsearch();

  }
    addToCart(product) {
  
      // this.count = this.count + 1;
      // this.products.count = this.count;
      // product.isInCart = true;
      // this.products.mycart.push(product);
      // this.products.sendCount(this.products.mycart.length);
      let prod = 
      {
        "name":product.name,
        "category":product.category,
        "desc":product.desc,
        "price":product.price
      }
      product.isInCart = true;
      this.products.mycart.push(prod);
      this.products.sendCount(this.products.mycart.length);
    }
    removeFromCart(product)
    {
      // this.count = this.count - 1;
      // this.products.count = this.count;
      // product.isInCart = false;
      product.isInCart = false;
    var index = -1;
    var comArr = this.products.getcart();
    for (var i = 0; i < comArr.length; i++) {
      if (comArr[i].name === product.name) {
        index = i;
        break;
      }
    }
    this.products.mycart.splice(index, 1);
    this.products.sendCount(this.products.mycart.length);
    }
}
