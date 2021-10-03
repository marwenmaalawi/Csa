import { Component, OnInit } from '@angular/core';
import { Fournisseur} from "../modul/fournisseur";

@Component({
  selector: 'app-fournisseur-component',
  templateUrl: './fournisseur-component.component.html',
  styleUrls: ['./fournisseur-component.component.css']
})
export class FournisseurComponentComponent implements OnInit {
  fournisseur1: Fournisseur;

  constructor() { }

  ngOnInit(): void {
    this.fournisseur1={
      idFournisseur: 105,
      code: 'A104B89',
      libelle: 'MyTeck',
    hide:false}
  }
 modifier(f:Fournisseur)
{f.hide=true;
console.log(f.hide);}
}
