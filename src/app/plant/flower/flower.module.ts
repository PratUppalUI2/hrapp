import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlowerComponent } from './flower.component';
import { OrdinalPipe } from '../ordinal/ordinal.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FlowerComponent, OrdinalPipe],
  exports: [
    FlowerComponent
  ]
})
export class FlowerModule { }
