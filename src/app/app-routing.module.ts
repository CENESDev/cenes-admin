import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 
  {path: '',loadChildren:'./user-list/user-list.module#UserListModule'},

];

@NgModule({
  imports: [
    CommonModule,RouterModule.forRoot(routes), RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
