import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import 'rxjs/add/operator/map';
import {UserList} from "../../shared/models/userList.model";
import { Observable } from 'rxjs';


@Injectable()
export class UserListService {

    url: String = "https://api.cenesgroup.com";  
  constructor(private http: Http) {}
getUserList(): any {
console.log("Before calling")
    return this.http.get(this.url+'/api/guest/users').map(response => {
        return response.json();
    });
  }
  }
