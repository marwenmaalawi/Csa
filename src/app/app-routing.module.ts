import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {MainUserComponent} from "./main-user/main-user.component";
import {ProductComponent} from "./product/product.component";
import {HomeComponent} from "./home/home.component";
import {NotfoundComponent} from "./notfound/notfound.component";
import {FormsModule} from "@angular/forms";
import {ListUserComponent} from "./list-user/list-user.component";
import {FormUsersComponent} from "./form-users/form-users.component";
import {LoginComponent} from "./login/login.component";



const ROUTES:Routes=[
  {path:'user' , component:MainUserComponent,children:
      [
        {path:'category/:category' , component:ListUserComponent},
        ]}
  ,{path:'product' ,component:ProductComponent},
  {path:'add' ,component:FormUsersComponent},
  {path:'connect' ,component:LoginComponent},
  {path:'home' , component:HomeComponent},
  {path:'' , redirectTo:'/home',pathMatch:'full'}
  ,{path:'**' ,component:NotfoundComponent},]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES),

  ],
  exports:[RouterModule,]
})
export class AppRoutingModule { }
