import { Injectable } from '@angular/core';
import { RuleService } from './rule.service';
import { RuleItem } from './rule-item.model';

@Injectable({
  providedIn: 'root',
  useFactory: () => new ActionService(),
})
export class ActionService implements RuleService {

  readonly actions: Array<RuleItem> = [
    new RuleItem(
      'Attack (melee or ranged)',
      'Making a single attack is a standard action.',
      ''
    ),
    new RuleItem(
      'Use a Special Ability',
      '',
      ''
    ),
    new RuleItem(
      'Cast a spell',
      'Most spells require a standard action',
      'The vast majority of spells require at least a' +
        ' standard action to cast, and sometimes more. Spells that take more' +
        ' than a round to cast require a full action each round until they are' +
        ' complete. For more information about how spells and magic work, see Chapter 10.'
    ),
    new RuleItem(
      'Concentrate',
      'Concentrate to maintain a spell',
      ''
    ),
    {name: 'Dismiss a spell', shortDescription: '', fullDescription: ''},
    new RuleItem(
      'Combat Maneuver: Bull Rush',
      'Attempt to knock the target back',
      'You knock the target back 5 feet,' +
        ' plus 5 additional feet for every 5 by which the result of your attack roll exceeds the target’s' +
        ' KAC + 8. If an obstacle is in the way, the target stops at the obstacle instead.'),
    new RuleItem(
      'Combat Maneuver: Dirty Trick',
      'Attempt to hinder the target',
      'You make an unorthodox attack to briefly hinder the target.' +
        ' A dirty trick could be throwing sand in the target’s eyes, jamming a rock into his actuators,' +
        ' or any other improvised action designed to put your opponent at a disadvantage.' +
        ' Your target is blinded, deafened, entangled, off-target, shaken, or sickened (your choice) for 1 round,' +
        ' plus 1 additional round for every 5 by which the result of your attack roll exceeds the target’s KAC + 8' +
        ' (see Conditions beginning on page 273 for information on these conditions).' +
        ' The target can remove the condition as a move action. A dirty trick is normally a melee attack,' +
        ' but a GM can allow certain actions to count as dirty tricks at range, in which case you take a –2 penalty' +
        ' to your attack roll for every 5 feet between you and the target.'
      ),
    {name: 'Covering Fire', shortDescription: '', fullDescription: ''},
    {name: 'Feint', shortDescription: '', fullDescription: ''},
    {name: 'Fight Defensively', shortDescription: '', fullDescription: ''},
    {name: 'Harrying Fire', shortDescription: '', fullDescription: ''},
    {name: 'Total Defense', shortDescription: '', fullDescription: ''},
    {
      name: 'Activate an Item',
      shortDescription: '',
      fullDescription: 'Many technological and magic items ' +
       'such as a cybernetic hand, don’t need to be activated. ' +
       'Certain items, however, do need to be activated to have an effect. ' +
       'Unless otherwise noted, activating such an item is a standard action.'
    },
  ];

  rules() {
    return this.actions;
  }
}
