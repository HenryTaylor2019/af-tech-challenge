import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Client } from 'src/app/models/client.model';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {
  public clientData: Client;
  public isSelectedClient: boolean;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Client,
    private dialogRef: MatDialogRef<DialogComponent>
  ) {
    this.clientData = data;
  }

  onCloseModal() {
    this.dialogRef.close();
  }
}
