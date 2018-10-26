import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './modules/material.module';
import { RuleCardComponent } from './rule-card/rule-card.component';
import { ActionsComponent } from './actions/actions.component';
import { SwiftActionsComponent } from './swift-actions/swift-actions.component';
import { ConditionsComponent } from './conditions/conditions.component';
import { FullActionsComponent } from './full-actions/full-actions.component';
import { MoveActionsComponent } from './move-actions/move-actions.component';
import { OtherActionsComponent } from './other-actions/other-actions.component';
import { ReactionsComponent } from './reactions/reactions.component';
import { DataModule } from './data/data.module';
import { RuleDialogComponent } from './rule-card/rule-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    RuleCardComponent,
    RuleDialogComponent,
    ActionsComponent,
    SwiftActionsComponent,
    ConditionsComponent,
    FullActionsComponent,
    MoveActionsComponent,
    OtherActionsComponent,
    ReactionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    DataModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [RuleDialogComponent]
})
export class AppModule { }
