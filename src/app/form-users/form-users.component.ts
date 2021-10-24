import { Component, OnInit } from '@angular/core';
import {User} from "../model/user";
import {UserService} from "../services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-form-users',
  templateUrl: './form-users.component.html',
  styleUrls: ['./form-users.component.css']
})
export class FormUsersComponent implements OnInit {
  user : User;
  //list:User[];
  constructor(private userService : UserService , private route:Router) { }

  ngOnInit(): void {
    this.user= new User();
    //this.list=[];
  }
  save(){
    this.user.accountCategory='Customer';
    this.userService.list.push(this.user);
 console.log(this.userService.list)
    this.route.navigate(['/user/category/Customer'])
  }

}
