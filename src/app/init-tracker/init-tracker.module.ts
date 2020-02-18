import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import { FormsModule }   from '@angular/forms';

import { InitTrackerRoutingModule } from './init-tracker-routing.module';
import { InitTrackerComponent } from './init-tracker.component';


@NgModule({
  declarations: [InitTrackerComponent],
  imports: [
    CommonModule,
    InitTrackerRoutingModule,
    HttpClientModule,
    FormsModule,
    MatTableModule
  ]
})
export class InitTrackerModule { }
