import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../products.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-web',
    template: `
 <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
 <ul>
 <li ><img width="150" src="http://webneel.com/sites/default/files/images/manual/logo/28-brilliant-online-shopping-cart-store-logo.gif"alt='LOGO' ></li>
 <li><a (click)="goToDashboard()" class="active"><b>Dashboard</b></a></li>
 <li><a (click)="goToAllProduct()"><b>All Products</b><span class="w3-badge w3-red">{{this.products.product.length}}</span></a></li>
 <li><a (click)="goToSearch()" ><b>Search</b></a></li>
 <li><a (click)="goToMyCart()"><b>My Cart</b><span class="w3-badge w3-red">{{this.count.text}}</span></a></li>
 <li class="align"><a (click)="logout()"><b>Logout</b></a></li>
 </ul>

<router-outlet></router-outlet>

 `,
    styles: [
        `
img {
 display: block;
 color: white;
 text-align: center;
 padding: 14px 16px;
 
 text-decoration: none;
}

.align{
 float:right;
}

 ul {
 list-style-type: none;
 margin: 0;
 padding: 0;
 overflow: hidden;
 background-color:white;
 }
 
 li {
 float: left;
 }
 
 li a {
 display: block;
 color: black;
 text-align: center;
 padding: 14px 16px;
 font-family: Arial, Helvetica, sans-serif;
 text-decoration: none;
 font-size: 15px;
 }
 
 li a:hover {
 background-color:black;
 color:white;
 cursor:pointer;
 }
`
    ]
})
export class WebComponent implements OnInit {
    count: number;
    subscription: Subscription;
    constructor(private route: Router, private products: ProductsService) { }

    ngOnInit() {
        this.subscription = this.products.getCount().subscribe(count => {this.count = count; });
        }
    goToDashboard() {
        this.route.navigate(['/web/dashboard']);
    }
    goToAllProduct() {
        this.route.navigate(['/web/products']);
    }
    goToSearch() {
        this.route.navigate(['/web/search']);
    }
    goToMyCart() {
        this.route.navigate(['/web/mycart']);
    }
    logout() {
        this.route.navigate(['/login']);
    }
    





}
