import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionService } from './action.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    ActionService
  ]
})
export class DataModule { }
