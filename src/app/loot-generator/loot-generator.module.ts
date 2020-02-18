import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LootGeneratorRoutingModule } from './loot-generator-routing.module';
import { LootGeneratorComponent } from './loot-generator.component';


@NgModule({
  declarations: [LootGeneratorComponent],
  imports: [
    CommonModule,
    LootGeneratorRoutingModule
  ]
})
export class LootGeneratorModule { }
