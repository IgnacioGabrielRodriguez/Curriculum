import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { ModeladoComponent } from './pages/modelado/modelado.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'modelado', component: ModeladoComponent},
  {path:  '', redirectTo: 'home' , pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
