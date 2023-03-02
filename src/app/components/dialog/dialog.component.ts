import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Client } from 'src/app/models/client.model';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent {
  public client: Client;
  public isSelectedClient: boolean;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Client,
    public dialogRef: MatDialogRef<DialogComponent>
  ) {
    this.client = data;
  }

  onCloseModal() {
    this.dialogRef.close();
  }

  onAddRemoveClient(client: Client) {
    this.onCloseModal()
    client.isSelected = !client.isSelected;
  }
}
