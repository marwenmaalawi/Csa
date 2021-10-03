import { Component, OnInit } from '@angular/core';
import {Fournisseur} from "../modul/fournisseur";

@Component({
  selector: 'app-list-fournisseur-component',
  templateUrl: './list-fournisseur-component.component.html',
  styles: [
  ]
})
export class ListFournisseurComponentComponent implements OnInit {
 list:Fournisseur[];
  constructor() { }

  ngOnInit(): void {
    this.list=[
      {idFournisseur:1,code:"1ABC4522",libelle:"hp",hide:false},
      {idFournisseur:2,code:"2ABC4522",libelle:"dell",hide:false},
      {idFournisseur:3,code:"3ABC4522",libelle:"lenovo",hide:false},
      {idFournisseur:400,code:"40ABC452",libelle:"asus",hide:false}
    ]
  }
  getbgColor(f: Fournisseur){
    if(f.libelle=="hp"){
      return "green";}
    else return "yellow";
  }

  getColor(f: Fournisseur){
    if((f.code.charAt(0)=="2") && (f.code.charAt(1)=="A"))
      return "bold";
    else return "";
  }

  delete(f: Fournisseur){
    let i = this.list.indexOf(f);
    this.list.splice(i,1);
  }

}
