import { Component } from '@angular/core';
//import { CalcService } from './commons/calc.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'App Component (with Custom Directive)';
  footerMenu = ['Privacy', 'Disclaimer', 'Media'];
  constructor() {};  
}
