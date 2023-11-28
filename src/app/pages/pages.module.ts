import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ModeladoComponent } from './modelado/modelado.component';



@NgModule({
  declarations: [
    HomeComponent,
    ModeladoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
