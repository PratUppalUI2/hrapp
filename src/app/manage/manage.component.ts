import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from "@angular/material";
import { AddComponent } from './add/add.component';
//import { FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})

export class ManageComponent {
  constructor(private dialog: MatDialog) {}

  openDialog() {

      const dialogConfig = new MatDialogConfig();

      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;

      dialogConfig.data = {
        id: 1,
        title: 'Angular For Beginners'
      };
      
      this.dialog.open(AddComponent, dialogConfig);
  }
}
/*export class ManageComponent implements OnInit {
  reactiveForm:FormGroup;
  firstname = "Test";

  constructor() {
    this.reactiveForm = new FormGroup({
      'name':new FormControl('', [Validators.required]),
      'age':new FormControl('',[Validators.required])
    });
   }

  ngOnInit() {
  }

  submitMyForm(formData) {
    console.log(formData.value);
  }*/

