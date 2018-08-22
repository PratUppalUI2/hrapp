import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plant',
  templateUrl: './plant.component.html',
  styleUrls: ['./plant.component.css']
})
export class PlantComponent implements OnInit {
  plantTitle:string;
  dataFromChild:string;
  toChild:string;
  constructor() {
    this.plantTitle = "Plant";
   }

  ngOnInit() {
  }

  fromChild(data) {
    this.dataFromChild = data;
    this.toChild = data;
    console.log("Received from Child:", data);
  }

  onSubmit() {
    //this.toChild = toChild;
    console.log("Sending the child:", this.toChild)

  }
}
