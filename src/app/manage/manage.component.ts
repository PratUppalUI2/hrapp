import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {
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
    //alert(formData.value.firstname);
  }

}
