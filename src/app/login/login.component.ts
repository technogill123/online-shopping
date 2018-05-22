
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  template: `
  <div align="center">
  <img width="400" src="http://webneel.com/sites/default/files/images/manual/logo/28-brilliant-online-shopping-cart-store-logo.gif"  >
    
 <h2> LOGIN</h2><br>
   <table border=0 height="200" width="400" >
   
<div align="center" top-margin ="100">          
<input type="text" [(ngModel)]="id" align="center"  placeholder="Enter Username" #id1><br>
<input type= "password" [(ngModel)]="user" align="center"   placeholder="Enter Password" #use1><br>
<br><button class="button" (click)="goToMenu(id1.value,use1.value)"  type="submit" style="vertical-align:middle" >SUBMIT</button>
</div>
</table>
</div>
  `,
  styles: [`
    input {
      width: 100%;
      padding: 12px 20px;
      margin: 8px 0;
      box-sizing: border-box;
      border: 3px solid #ccc;
      -webkit-transition: 0.5s;
      transition: 0.5s;
      outline: none;
  }
  
  input:focus {
      border: 3px solid #555;
  }
  .button {
    background-color: #f4511e;
    border: none;
    color: white;
    padding: 16px 32px;
    text-align: center;
    font-size: 16px;
    margin: 4px 2px;
    opacity: 0.6;
    transition: 0.3s;
    display: inline-block;
    text-decoration: none;
    cursor: pointer;
  }
  
  .button:hover {opacity: 1}
`
  ]
})
export class LoginComponent implements OnInit {
  public id;
  public user;
  constructor(private route: Router) { }

  ngOnInit() {
  }
  goToMenu(user, pass) {
    console.log(user);
    console.log(pass);
    if (user == pass && user != '' && pass != '') {

      this.route.navigate(['/web/dashboard']);
    }
    else if (user == '' && pass == '') {
      window.alert("Please Fill The Username And Password");
    }
    else if (user == '') {
      window.alert("Please Fill The Username");
    }
    else if (pass == '') {
      window.alert("Please Fill The Password");
    }

    else {
      window.alert("Invalid Credentials");
    }
  }
}



