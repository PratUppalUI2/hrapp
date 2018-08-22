import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flower',
  templateUrl: './flower.component.html',
  styleUrls: ['./flower.component.css']
})
export class FlowerComponent implements OnInit {
  nums: any[];
  currday = new Date();

  constructor() { 
    this.nums = [1,2,3,4,5,6,7,8,9];
  }

  ngOnInit() {
  }
}
