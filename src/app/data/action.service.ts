import { Injectable } from '@angular/core';
import { RuleService } from './rule.service';
import { RuleItem } from './rule-item.model';

@Injectable({
  providedIn: 'root',
  useFactory: () => new ActionService(),
})
export class ActionService implements RuleService {

  actions: Array<RuleItem> = [
    {name: 'Attack (melee or ranged)', shortDescription: '', fullDescription: ''}
  ];

  rules() {
    return this.actions;
  }
}
