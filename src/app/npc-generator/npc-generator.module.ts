import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NpcGeneratorRoutingModule } from './npc-generator-routing.module';
import { NpcGeneratorComponent } from './npc-generator.component';


@NgModule({
  declarations: [NpcGeneratorComponent],
  imports: [
    CommonModule,
    NpcGeneratorRoutingModule
  ]
})
export class NpcGeneratorModule { }
