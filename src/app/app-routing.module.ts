import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActionsComponent } from './actions/actions.component';
import { MoveActionsComponent } from './move-actions/move-actions.component';
import { SwiftActionsComponent } from './swift-actions/swift-actions.component';
import { FullActionsComponent } from './full-actions/full-actions.component';
import { OtherActionsComponent } from './other-actions/other-actions.component';
import { ReactionsComponent } from './reactions/reactions.component';
import { ConditionsComponent } from './conditions/conditions.component';

const routes: Routes = [
  {
    path: 'actions',
    component: ActionsComponent
  },
  {
    path: 'move-actions',
    component: MoveActionsComponent
  },
  {
    path: 'swift-actions',
    component: SwiftActionsComponent
  },
  {
    path: 'full-actions',
    component: FullActionsComponent
  },
  {
    path: 'other-actions',
    component: OtherActionsComponent
  },
  {
    path: 'reactions',
    component: ReactionsComponent
  },
  {
    path: 'conditions',
    component: ConditionsComponent
  },
  {
    path: '',
    redirectTo: '/actions',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
