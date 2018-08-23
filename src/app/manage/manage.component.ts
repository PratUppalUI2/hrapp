import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { RegisterComponent } from '../register/register.component';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {
  reactiveForm: FormGroup;
  firstname = 'Test';

  constructor(public dialog: MatDialog) {
    this.reactiveForm = new FormGroup({
      'name': new FormControl('', [Validators.required]),
      'age': new FormControl('',[Validators.required])
    });
   }

  ngOnInit() {
  }

  submitMyForm(formData) {
    console.log(formData.value);
    // alert(formData.value.firstname);
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(RegisterComponent, {
    });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    // });
  }

}
