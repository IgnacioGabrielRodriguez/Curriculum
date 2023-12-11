import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ModeladoComponent } from './modelado/modelado.component';
import { ProgramacionComponent } from './programacion/programacion.component';
import { DisenadorComponent } from './disenador/disenador.component';



@NgModule({
  declarations: [
    HomeComponent,
    ModeladoComponent,
    ProgramacionComponent,
    DisenadorComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
