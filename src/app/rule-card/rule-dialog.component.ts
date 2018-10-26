import { Component, Inject, Input } from '@angular/core';
import { RuleItem } from '../data/rule-item.model';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
    selector: 'app-rule-dialog',
    templateUrl: 'rule-dialog.component.html',
})
export class RuleDialogComponent {
    constructor(
        public dialogRef: MatDialogRef<RuleDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: RuleItem) {}

    onNoClick(): void {
        this.dialogRef.close();
    }
}
