import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Router } from '@angular/router';

@Component({
 selector: 'app-dashboard',
 template: `
 <div class="image">
 <div class="card">
 <img src="https://images-na.ssl-images-amazon.com/images/I/71FtEpgYHuL._UL1500_.jpg" alt="footwear" >
 <h1>Footwear</h1>
 <p class="title">Total 5 products</p>
 <p>Range from $39.99 to $50</p>
 <p><button (click)="footwear()">Show All Products</button></p>
 </div>
 <div class="card">
 <img src="http://www.alux.com/wp-content/uploads/2014/11/10-Best-Omega-Watches-of-All-Time.jpg" alt="footwear" >
 <h1>Watches</h1>
 <p class="title">Total 5 products</p>
 <p>Range from $60 to $100</p>
 <p><button (click)="watch()">Show All Products</button></p>
 </div>
 <div class="card">
 <img src="https://cdn.shopify.com/s/files/1/1751/5037/products/CURLY-EDGE-COTTON-SUMMER-SHORT-T-SHIRT_800x.jpg?v=1510181243">
 <h1>Clothes</h1>
 <p class="title">Total 5 products</p>
 <p>Range from $5 to $10</p>
 <p><button (click)="cloth()">Show All Products</button></p>
 </div>
 </div>
 `,
 styles: [`
 .image{
 height:40em; background-size:cover; width:auto;
 background-image:url('http://lacenlingerie.com/wp-content/uploads/2017/05/cloud-computingin-2017b-950x633.jpg');
 background-position:50% 50%;
 }
 .card {
 box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
 max-width: 300px;
 text-align: center;
 font-family: arial;
 float :left;
 margin-left: 130px;
 margin-top: 120px;
 background-color: whitesmoke;
 }
 .title {
 color: grey;
 font-size: 18px;
 }
 button {
 border: none;
 outline: 0;
 display: inline-block;
 padding: 8px;
 color: white;
 background-color: #000;
 text-align: center;
 cursor: pointer;
 width: 100%;
 font-size: 18px;
 }
 a{
 text-decoration: none;
 font-size: 22px;
 color: black;
 }
 button:hover, a:hover {
 opacity: 0.7;
 }
 img
 {
 width: 250px;
 height: 150px;
 }`]
})
export class DashboardComponent implements OnInit {

    query = {
        footwear: false,
        tshirt: false,
        watches: false
      }
      public product = [];


 constructor(private products:ProductsService,private route:Router) { }

 ngOnInit() {

    this.product = [];
    for (const key in this.query) {
      if (this.query.hasOwnProperty(key)) {
        const category = this.query[key];
        if (category) {
          this.product = [...this.product, ...this.products.getCatagoryProducts(key)];
        }
      }
    }

 }
footwear()
{   
    this.products.search=this.products.getCatagoryProducts("footwear");
   this.route.navigate(['/web/result']);
}

cloth()
{
    
    this.products.search=this.products.getCatagoryProducts("tshirt");
    this.route.navigate(['/web/result']);
}
watch()
{
    this.products.search=this.products.getCatagoryProducts("watch")
    this.route.navigate(['/web/result']);
}

}
