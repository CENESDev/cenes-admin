import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment.prod';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 	baseUrl = environment.baseUrl;
	isMobileGlobal : boolean = false;
	EventURLCheck : boolean = false;

  constructor() { }

  ngOnInit() {
  	 var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    this.isMobileGlobal = isMobile;
	var url =window.location.href;
	this.EventURLCheck = (url.indexOf("event")!=-1) ? true : false;
  }

}
