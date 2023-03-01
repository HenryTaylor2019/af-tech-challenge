import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Client } from 'src/app/models/client.model';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent {
  @Input() public client: Client;
  @Output() public openDialog = new EventEmitter<Client>();

  onModalClick(client: Client): void {
    this.openDialog.emit(client)
  }

}
