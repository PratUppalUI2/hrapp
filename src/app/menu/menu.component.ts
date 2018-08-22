import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
    menuItems = [
    {title: 'Home', link: 'http://zenrays.com'},
    {title: 'Contact', link: 'http://zenrays.com/contact-zenrays'},
    {title: 'Services', link: 'http://zenrays.com'}
    ];
    menuClass: string = "menuClass2";
  
  constructor() { 
    console.log("Iam Constructor") 
    
  }

  ngOnInit() {
    console.log("I am OnInit")
  }

  /*onClickMe() {
    this.menuClass = "menuClass1";
  }*/
}
