import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserListRoutingModule } from './user-list-routing.module';
import { UserListComponent } from './user-list.component';
import { FormsModule } from '@angular/forms';
import {DataTableModule} from "angular-6-datatable";

@NgModule({
  imports: [
    CommonModule,
    UserListRoutingModule,
    FormsModule,
    DataTableModule
  ],
  declarations: [UserListComponent]
})
export class UserListModule { }
