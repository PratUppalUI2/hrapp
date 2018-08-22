import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FruitComponent } from './fruit.component';
import { BannerComponent } from './banner/banner.component';
//import { FontblueDirective } from '../../././commons/fontblue.directive';

@NgModule({
  imports: [
    FormsModule,
    CommonModule
  ],
  declarations: [FruitComponent, BannerComponent],
  exports: [
    FruitComponent,
    BannerComponent
  ]
})
export class FruitModule { }
