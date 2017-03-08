
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './../home/home.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'bar', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class RoutesRoutingModule { }
