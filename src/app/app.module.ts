import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FournisseurComponentComponent } from './fournisseur-component/fournisseur-component.component';
import { ListFournisseurComponentComponent } from './list-fournisseur-component/list-fournisseur-component.component';

@NgModule({
  declarations: [
    AppComponent,
    FournisseurComponentComponent,
    ListFournisseurComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
