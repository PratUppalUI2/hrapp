import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
    /*menuItems = [
    {title: 'Home', link: 'http://Prat.com'},
    {title: 'Contact', link: 'http://Prat.com/contact-Prat'},
    {title: 'Services', link: 'http://Prat.com'}
    ];*/
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
