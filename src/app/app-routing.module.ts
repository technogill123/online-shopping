import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WebComponent } from './web/web.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AllproductComponent } from './allproduct/allproduct.component';
import { SearchComponent } from './search/search.component';
import { MycartComponent } from './mycart/mycart.component';
import { ProfileComponent } from './profile/profile.component';
import { ResultComponent } from './result/result.component';


const routes: Routes = [

  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component: LoginComponent},
  {path:'web',component:WebComponent,
  children: [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'products', component: AllproductComponent },
    { path: 'search', component: SearchComponent },
    { path: 'mycart', component: MycartComponent },
    {path: 'profile',component:ProfileComponent},
    {path:'result',component:ResultComponent}
]
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
