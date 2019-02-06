import { Component, OnInit,NgModule } from '@angular/core';
import {UserListService} from '../core/service/userList.service';
import {UserList} from '../shared/models/userList.model';
import { GrdFilterPipe } from '../shared/modules/search-by-name.pipe';
import { Meta, Title } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {DataTableModule} from "angular-6-datatable";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  userList: UserList;
  userListArray : any = [];
  rowsOnPage : number;
  searchText : string;
  tempArray : any = [];
  constructor(private userListService : UserListService,public title: Title) {

   }

  ngOnInit() {
  	
    this.title.setTitle("CENES USERS");
    this.userListService.getUserList().subscribe(response=> {
    	console.log(response)
      	this.userList = response.data;
      	console.log(Object.values(this.userList));
      
     	this.rowsOnPage = 15;
		let evilResponseProps = Object.values(this.userList);
		let obj;
		for (obj in evilResponseProps) { 
	  		console.log(evilResponseProps[obj]);
	    	this.userListArray.push(evilResponseProps[obj]);
		}
		this.tempArray = this.userListArray;
    });
  }
  filterUser(value){
    console.log("value : "+value);
    let filterArray = [];
    let searchedArray = [];
    if(value!=''){
    filterArray['name'] = value;
    filterArray['email'] = value;
    filterArray['phone'] = value;
    filterArray['gender'] = value;
    filterArray['userId'] = value;
   searchedArray = new GrdFilterPipe().transform(this.userListArray,filterArray,false);
   this.userListArray = searchedArray;
    }else{
      this.userListArray = this.tempArray;
    }
  }
}
