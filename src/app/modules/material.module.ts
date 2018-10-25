import { NgModule } from '@angular/core';


import {
  MatButtonModule,
  MatCheckboxModule,
  MatCardModule,
  MatDividerModule,
  MatSidenavModule,
  MatMenuModule,
  MatToolbarModule,
  MatTooltipModule,
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatDividerModule,
    MatSidenavModule,
    MatMenuModule,
    MatToolbarModule,
   MatTooltipModule,
  ],
  exports: [
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatDividerModule,
    MatSidenavModule,
    MatMenuModule,
    MatToolbarModule,
    MatTooltipModule,
  ],
})
export class MaterialModule { }
