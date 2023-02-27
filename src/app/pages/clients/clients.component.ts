import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/models/client.model';
import { ClientsService } from 'src/app/services/clients.service';
import { map } from 'rxjs/operators';

import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';
import { DialogComponent } from 'src/app/components/dialog/dialog.component';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'],
})
export class ClientsComponent implements OnInit {
  public isFetching: boolean;

  public clients: Client[] = [];
  public filteredClients: Client[] = [];
  public selectedClients = [];


  constructor(
    private clientsService: ClientsService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.onGetClientData();
  }

  onGetClientData(): void {
    this.clientsService
      .fetchClients()
      .pipe(
        map((speakerData) => {
          this.isFetching = false;
          this.clients = speakerData[0];
          this.filteredClients = speakerData[0];
        })
      )
      .subscribe();
  }

  onOpenDialog(client: Client) {
    const dialogRef =  this.dialog.open(DialogComponent, {
      data: client,
      height: 'auto',
      width: 'auto',
    });
  }


  onAddClientToList(clientName) {
    this.clients.map((client, i) => {
      if (clientName === client.name.last) {
        let selectedClient = client;
        this.clients.splice(i, 1);
        this.selectedClients.push(client);
      }
    });
  }

  onRemoveClientFromList(clientName) {
    this.selectedClients.map((client, i) => {
      if (clientName === client.name.last) {
        this.selectedClients.splice(i, 1);
        this.clients.unshift(client);
      }
    });
  }

  filterBySearch(eventData): void {
    let searchQuery = eventData.target.value;

    this.filteredClients = this.clients.filter((speaker) => {
      return (
        speaker.name.first.toLocaleLowerCase().includes(searchQuery) ||
        speaker.name.last.toLocaleLowerCase().includes(searchQuery)
      );
    });
  }
}
