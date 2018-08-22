import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PlantComponent } from './plant.component';

import { CommonsModule } from '../commons/commons.module';
import { FlowerModule } from './flower/flower.module';
import { FruitModule } from './fruit/fruit.module';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    FlowerModule,
    FruitModule,
    CommonsModule
  ],
  declarations: [ 
    PlantComponent,
  ],
  exports: [
    PlantComponent
  ]
})
export class PlantModule { }
