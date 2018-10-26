import { Component, Inject, Input } from '@angular/core';
import { RuleItem } from '../data/rule-item.model';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { RuleDialogComponent } from './rule-dialog.component';

@Component({
  selector: 'app-rule-card',
  templateUrl: './rule-card.component.html',
  styleUrls: ['./rule-card.component.scss']
})
export class RuleCardComponent {
  @Input() rule: RuleItem;

  constructor(public dialog: MatDialog) {}

  showMoreInfo(): void {
    if (this.rule.fullDescription) {
      const dialogRef = this.dialog.open(RuleDialogComponent, {
        data: this.rule
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log('dialog closed');
      });
    }
  }
}


