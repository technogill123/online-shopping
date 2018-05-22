import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-mycart',
  template: `
  <div>
  <h2> My Cart</h2>

  <table style="width:50%">
 <tr style="text-align: left">
   <th>Product Name</th> 
   <th>Category</th>
   <th>Product Description</th>
   <th>Price</th>
   <th>Action</th>
 </tr>

 <tr *ngFor="let pro of prod" style="text-align: left" >
 <td>{{pro.name}}</td>
 <td>{{pro.category}}</td>
 <td>{{pro.desc}}</td>
 <td>{{pro.price}}</td>
 <td><button (click)="removeRow(pro);">Remove</button></td>
</tr>
</table>
<br>
  <h3>Total Price:$ {{price}}</h3>
 
 </div>
  `,
  styles: [
    `

    div{
      background-color:#f0f0f5;
    }
    h2{
      color: grey;
      font-size: 35px;
      font-family: arial;
      opacity: 0.7;
      margin-left:30px;
      margin-top: 30px;
     
      }

    h3{
      font-family: Arial, Helvetica, sans-serif;

  margin-left:600px;
  margin-top: 100px;
    }
h2{ 
    
  font-family: Arial, Helvetica, sans-serif;

  margin-left:30px;
  margin-top: 30px; 
}
th,td{
  width:10px;
  text-align:center;
  font-family: Arial, Helvetica, sans-serif;
}
table{
  margin-left:60px;
  margin-top: 30px; 

}
table:hover
{
  background-color:#f0f5f5;
}

`
  ]
})
export class MycartComponent implements OnInit {
  public prod = [];
  public price:number=0;
  constructor(private products: ProductsService) { }

  ngOnInit() {
    this.prod = this.products.getcart();
  
    for(var j=0;j<this.products.getcart().length;j++)
    {
      this.price=this.prod[j].price+this.price;
    }
  }



  removeRow(pro){	
 pro.isInCart=false;
 this.price=this.price-pro.price;
    var index = -1;	
    var comArr = this.products.getcart();
    for( var i = 0; i < comArr.length; i++ ) {
    if( comArr[i].name === pro.name ) {
    index = i;
    break;
    }
    }
    
    this.products.mycart.splice( index, 1 );	
    this.products.sendCount(this.products.mycart.length);	
    };
  
  
}
