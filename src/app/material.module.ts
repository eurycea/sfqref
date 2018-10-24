import { MatButtonModule, MatCheckboxModule, MatCardModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [BrowserAnimationsModule, MatButtonModule, MatCheckboxModule, MatCardModule],
  exports: [BrowserAnimationsModule, MatButtonModule, MatCheckboxModule, MatCardModule],
})
export class MaterialModule { }
