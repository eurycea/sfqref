import { Component, OnInit } from '@angular/core';
import { ActionService } from '../data/action.service';
import { RuleItem } from '../data/rule-item.model';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss']
})
export class ActionsComponent implements OnInit {
  actions: RuleItem[];
  // static $inject = ['ActionService'];
  constructor(actionService: ActionService) {
    this.actions = actionService.rules();
   }

  ngOnInit() {
  }

}
