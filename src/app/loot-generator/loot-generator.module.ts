import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import {MatTableModule} from '@angular/material/table';

import { LootGeneratorRoutingModule } from './loot-generator-routing.module';
import { LootGeneratorComponent } from './loot-generator.component';


@NgModule({
  declarations: [LootGeneratorComponent],
  imports: [
    CommonModule,
    LootGeneratorRoutingModule,
    FormsModule,
    MatTableModule
  ]
})
export class LootGeneratorModule { }
