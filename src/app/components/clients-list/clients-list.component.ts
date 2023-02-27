import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Client } from 'src/app/models/client.model';

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.scss']
})
export class ClientsListComponent {
  @Input() public clients: Client[] = [];
  @Input() public filteredClients: Client[] = [];
  @Output() public openDialog = new EventEmitter<Client>();
  @Output() public selectedClient = new EventEmitter<string>();

  onOpenDialog(client: Client) {
    this.openDialog.emit(client);
  }

  onAddClientToList(clientId: string) {
    this.selectedClient.emit(clientId);
  }
}
