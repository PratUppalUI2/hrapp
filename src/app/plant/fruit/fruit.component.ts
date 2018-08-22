import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-fruit',
  templateUrl: './fruit.component.html',
  styleUrls: ['./fruit.component.css']
})
export class FruitComponent implements OnInit {
  toParent: string;
  studentOb;
  @Input() toChild;
  @Output() childClick = new EventEmitter();
  
   constructor() {  
    //this.toParent= this.toChild;  
    console.log("I am in Child Constructor:", this.toChild);
  }

  ngOnInit() {
    setTimeout(() => this.studentOb = {name: 'Pratap', location: 'Hyderabad'}, 4000);
  }

  onSubmit() {
    console.log("Text Value is:", this.toParent);
    console.log("I am in Click");
    this.childClick.emit(this.toParent);
  }
}
