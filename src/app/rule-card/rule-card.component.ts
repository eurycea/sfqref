import { Component, OnInit, Input } from '@angular/core';
import { RuleItem } from '../data/rule-item.model';

@Component({
  selector: 'app-rule-card',
  templateUrl: './rule-card.component.html',
  styleUrls: ['./rule-card.component.scss']
})
export class RuleCardComponent {
  @Input() rule: RuleItem;
}
