import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from "@angular/material";
import { ManageComponent } from './manage.component';
import { AddComponent } from './add/add.component';
import { MatButtonModule, MatFormFieldModule, MatInputModule,MatRippleModule } from '@angular/material';

@NgModule({
  exports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule
  ],
  declarations: [
    ManageComponent,
    AddComponent
  ],
  entryComponents: [ AddComponent ]
})
export class ManageModule { }
