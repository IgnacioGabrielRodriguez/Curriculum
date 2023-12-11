import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { ModeladoComponent } from './pages/modelado/modelado.component';
import { ProgramacionComponent } from './pages/programacion/programacion.component';
import { DisenadorComponent } from './pages/disenador/disenador.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'modelado', component: ModeladoComponent},
  {path: 'programacion', component: ProgramacionComponent},
  {path: 'disenador', component: DisenadorComponent},
  {path:  '', redirectTo: 'home' , pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
