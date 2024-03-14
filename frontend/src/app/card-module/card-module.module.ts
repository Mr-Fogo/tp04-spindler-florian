import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CardFormComponent } from './card-form/card-form.component';
import { ListeCartesComponent } from './liste-cartes/liste-cartes.component';



@NgModule({
  declarations: [CardFormComponent,ListeCartesComponent ],
  imports: [
    CommonModule, ReactiveFormsModule
  ],
  exports: [
    CardFormComponent, ListeCartesComponent
  ]
})
export class CarteModule { }