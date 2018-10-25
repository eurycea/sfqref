import { Injectable } from '@angular/core';
import { RuleService } from './rule.service';
import { RuleItem } from './rule-item.model';

@Injectable({
  providedIn: 'root',
  useFactory: () => new ActionService(),
})
export class ActionService implements RuleService {

  actions: Array<RuleItem> = [
    {name: 'Attack (melee or ranged)', shortDescription: '', fullDescription: ''},
    {name: 'Use a Special Ability', shortDescription: '', fullDescription: ''},
    {name: 'Cast a spell', shortDescription: '', fullDescription: ''},
    {name: 'Concentrate', shortDescription: 'Concentrate to maintain a spell', fullDescription: ''},
    {name: 'Dismiss a spell', shortDescription: '', fullDescription: ''},
    {name: 'Combat Maneuver', shortDescription: '', fullDescription: ''},
    {name: 'Covering Fire', shortDescription: '', fullDescription: ''},
    {name: 'Feint', shortDescription: '', fullDescription: ''},
    {name: 'Fight Defensively', shortDescription: '', fullDescription: ''},
    {name: 'Harrying Fire', shortDescription: '', fullDescription: ''},
    {name: 'Total Defense', shortDescription: '', fullDescription: ''},
    {name: 'Activate an Item', shortDescription: '', fullDescription: ''},
  ];

  rules() {
    return this.actions;
  }
}
